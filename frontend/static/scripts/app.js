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

const handleRofl = (e) => {
	const btn = e.target
	btn.style.position = 'absolute'
	btn.style.top = `${Math.random()*80}%`
	btn.style.left = `${Math.random()*80}%`
}

roflBtn.addEventListener('mouseenter', handleRofl)
roflBtn.addEventListener('click', () => alert('Может быть картинка?'))

let btnOrder = null
const handleRange = (e) => {
	const value = e.target.value
	btnOrder = value
	benBtnImg.src = `static/assets/icon/${value}call.png`
	console.log(btnOrder)
}

const handleBenCall = (e) => {
	const order = e.target.dataset.order

	if(order == btnOrder){
		modal.classList.add('modal--active')
	}
}

const handleCloseModal = (e) => {
	if(e.target == modal){
		modal.classList.remove('modal--active')
	}
}

const handleClickYes = () => {
	secretInp.style.opacity = 1
	modalImg.src = 'static/assets/img/ben_hoho.gif'
}

range.addEventListener('click', handleRange)
range.addEventListener('mousemove', handleRange)
benBtn.addEventListener('click', handleBenCall)
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

