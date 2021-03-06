const roflBtn = document.querySelector('.rfl-btn')
const menuItms = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu')
const secretInp = document.querySelector('.modal__secret-inp')
const range = document.querySelector('.range')
const benBtn = document.querySelector('.ben-btn')
const benBtnImg = benBtn.querySelector('img')
const modal = document.querySelector('.modal')
const modalBtns = document.querySelectorAll('.modal__buttons button')
const modalImg = document.querySelector('.modal__content img')


const createLightSword = () => {
	if(document.querySelector('.sword')) return
	const sword = document.createElement('div')
	sword.innerHTML = `
	<input id="vader" class="chk" type="checkbox"/>
		<label for="vader" class="vader-saber"> 
				<div class="sword blue">
		</label>`
	document.body.append(sword)
	const classChangeWatcher = new MutationObserver((mutations, observer) => {
		console.log(mutations[0].target.classList)
		const classes = mutations[0].target.classList.value.split(' ')
		if (classes.includes('red')){
			alert('Правильный выбор!')
			benBtn.removeEventListener('click', handleChoiceNotMade)
			benBtn.addEventListener('click', handleBenCall)
		}
		console.log(observer)
	})
	classChangeWatcher.observe(sword.querySelector('.sword'), {attributes: true})
}

const phrases = ['Да пребудет с тобой Сила.','Используй силу, Люк!','Внимание управляет реальностью.','Переходи на тёмную сторону!']
let currentPhrase = 0
const handleRofl = (e) => {
	const btn = e.target
	btn.style.position = 'absolute'
	btn.style.top = `${Math.random()*80}%`
	btn.style.left = `${Math.random()*80}%`
	if(currentPhrase == phrases.length-1){
		btn.innerText = phrases[currentPhrase]
		createLightSword()
		return
	}
	btn.innerText = phrases[currentPhrase]
	currentPhrase++
}
const handleRoflClick = (e) => {
	e.preventDefault()
	const btn = e.target
	currentPhrase = 3
	btn.innerText = phrases[currentPhrase]
	alert('sword blue = sword (color)')
	createLightSword()
}
roflBtn.addEventListener('mouseenter', handleRofl)
roflBtn.addEventListener('click', handleRoflClick)

let btnOrder = 0
const handleRange = (e) => {
	const value = e.target.value
	btnOrder = value
	benBtnImg.src = `static/assets/icon/${value}call.png`
}

function handleBenCall (e) {
	const order = e.target.dataset.order

	if(order == btnOrder){
		modal.classList.add('modal--active')
	}
}

function handleChoiceNotMade() {
	alert('Ты еще не сделал выбор!')
}

const handleCloseModal = (e) => {
	if(e.target == modal){
		modal.classList.remove('modal--active')
	}
}

const handleClickYes = () => {
	const dialog = modal.querySelector('h1')
	secretInp.style.opacity = 1
	modalImg.src = 'static/assets/img/ben_hoho.gif'
	dialog.innerText = 'I KNOW AHAHA'
}

range.addEventListener('click', handleRange)
range.addEventListener('mousemove', handleRange)
benBtn.addEventListener('click', handleChoiceNotMade)
modalBtns[1].addEventListener('click', handleClickYes)
modal.addEventListener('click', handleCloseModal)

let counter = 0
const handleRotate = () => {
	const degs = [0,180,360]
	const ranDeg = degs[Math.floor(Math.random()*degs.length)]
	
	if(counter === 5){
		menu.style.transform = `rotate(90deg)`
		range.style.display = 'block'
		range.style.opacity = 1
		benBtn.style.display = 'flex'
		counter = 0
		return
	}

	range.style.opacity = 0
	range.style.display = 'none'
	benBtn.style.display = 'none'
	menu.style.transform = `rotate(${ranDeg}deg)`
	counter++
}

menuItms.forEach(item => item.addEventListener('click', handleRotate))

const handleKeydown = (e) => {
	if(e.key === 'Enter'){
		window.location.replace(secretInp.value)
	}
}

secretInp.addEventListener('keydown', handleKeydown)

localStorage.setItem('SecretUrl', 'https://1drv.ms/w/s!Ak-qouplFmsmgnOyIzwIWtV7vek3?e=UM5vka')
document.cookie = 'krasava= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'