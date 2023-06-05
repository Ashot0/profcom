"use strict";

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};


const menu = document.getElementById('menu');
const teamBoxes = document.getElementById('team__boxes')
const teamBoxUp1 = document.getElementById('team__box__up1')
const teamBoxUp2 = document.getElementById('team__box__up2')

if (isMobile.any()) {
	teamBoxUp1.classList.add('_up-team')
	teamBoxUp2.classList.add('_up-team')
	teamBoxes.classList.add('_short')
	menu.classList.add('_hidden')

}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks)
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}