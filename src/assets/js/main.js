import {burgerMenu} from './functions/burger'

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
