export const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const mobileMenu = document.querySelector('.mobile-menu')
	const overlay = document.querySelector('.overlay')
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		burger.classList.toggle('active')
		overlay.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		body.classList.toggle('disable-scroll')
	}

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			burger.classList.remove('active')
			overlay.classList.remove('active')
			mobileMenu.classList.remove('active')
			body.classList.remove('disable-scroll')
		}
	})
}
burgerMenu()
const dropdowns = document.querySelectorAll('.menu-item-has-children')

dropdowns.forEach(dropdown => {
	const subMenu = dropdown.querySelector('.sub-menu')
	dropdown.addEventListener('click', toggleSubMenu)
})

function toggleSubMenu() {
	const subMenu = this.querySelector('.sub-menu')
	subMenu.style.maxHeight = subMenu.style.maxHeight
		? ''
		: subMenu.scrollHeight + 'px'
}
