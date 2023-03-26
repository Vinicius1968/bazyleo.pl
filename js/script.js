document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})

document.addEventListener('DOMContentLoaded', function () {
	const navTop = document.querySelector('.top')

	function addNavTop() {
		if (window.scrollY >= 5000) {
			navTop.classList.add('top')
		} else {
			navTop.classList.remove('top')
		}
	}

	window.addEventListener('scroll', addNavTop)
})
