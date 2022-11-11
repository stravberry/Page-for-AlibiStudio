const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active')
	mobile_menu.classList.toggle('is-active')
})

window.onload = function () {
	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 100) {
			document.querySelector('header').classList.add('scrolling')
		} else {
			document.querySelector('header').classList.remove('scrolling')
		}
	})
}
