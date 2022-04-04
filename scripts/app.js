const roflBtn = document.querySelector('.rfl-btn')

const handleRofl = (e) => {
	const btn = e.target

	btn.style.position = 'absolute'
	btn.style.top = `${Math.random()*80}%`
	btn.style.left = `${Math.random()*80}%`
}

roflBtn.addEventListener('mouseenter', handleRofl)
roflBtn.addEventListener('click', () => alert('Может быть картинка?'))