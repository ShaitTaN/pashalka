const roflBtn = document.querySelector('.rfl-btn')
const menuItms = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu')
const secretInp = document.querySelector('.secret-inp')

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