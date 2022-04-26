const sliderBtn = document.querySelector('.slider-btn')
const slides = document.querySelectorAll('.slide[data-slide="true"]')
const slider = document.querySelector('.slider')

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