const roflBtn = document.querySelector('.rfl-btn')
const menuItms = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu')
const secretInp = document.querySelector('.secret-inp')
const sliderBtn = document.querySelector('.slider-btn')
const slides = document.querySelectorAll('.slide[data-slide="true"]')
const slider = document.querySelector('.slider')

const handleRofl = (e) => {
	const btn = e.target

	btn.style.position = 'absolute'
	btn.style.top = `${Math.random()*80}%`
	btn.style.left = `${Math.random()*80}%`
}

roflBtn.addEventListener('mouseenter', handleRofl)
roflBtn.addEventListener('click', () => alert('Может быть картинка?'))

let counter = 0
const handleRotate = () => {
	const degs = [0,180,360]
	const ranDeg = degs[Math.floor(Math.random()*degs.length)]

	if(counter === 5){
		menu.style.transform = `rotate(90deg)`
		secretInp.style.opacity = 1
		counter = 0
		return
	}

	secretInp.style.opacity = 0
	menu.style.transform = `rotate(${ranDeg}deg)`
	counter++
}

menuItms.forEach(item => item.addEventListener('click', handleRotate))

let activeSlideIndex = 0
let deg = 1
const handleDown = () => {
	const slideImg = slides[activeSlideIndex].firstElementChild
	if (activeSlideIndex === slides.length-1){
		slides.forEach(slide => (slide.style.marginTop = '0px'))
		slideImg.style.transform = `rotate(${90*deg}deg)`
		activeSlideIndex = 0
		return
	}
	slides[activeSlideIndex].style.marginTop = '-300px'
	slideImg.style.transform = `rotate(${90*deg}deg)`
	activeSlideIndex++
	deg++
}

sliderBtn.addEventListener('click', handleDown)