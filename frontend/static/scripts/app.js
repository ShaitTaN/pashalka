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

const handleRotate = (e) => {
	item = e.target
	secretInp.style.opacity = 0
	switch(item.dataset.num){
		case '1':
			menu.style.transform = 'rotate(180deg)'
			break;
		case '2':
			menu.style.transform = 'rotate(90deg)'
			secretInp.style.opacity = 1
			break;
		case '3':
			menu.style.transform = 'rotate(0deg)'
			break;
	}
}

menuItms.forEach(item => item.addEventListener('click', handleRotate))

let activeSlideIndex = 0
const handleDown = () => {
	if (activeSlideIndex === slides.length-1){
		slides.forEach(slide => slide.style.marginTop = '0px')
		activeSlideIndex = 0
		return
	}
	slides[activeSlideIndex].style.marginTop = '-300px'
	activeSlideIndex++
}

sliderBtn.addEventListener('click', handleDown)