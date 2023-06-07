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


const teamBoxes = document.getElementById('team__boxes')
const teamBoxUp1 = document.getElementById('team__box__up1')
const teamBoxUp2 = document.getElementById('team__box__up2')
const footerIconsPhone = document.getElementById('footer__icons-phone')
const footerIconsPc = document.getElementById('footer__icons')
const menuLinkPhoneArr = document.querySelectorAll('.menu__link')



if (isMobile.any()) {
	teamBoxUp1.classList.add('_up-team')
	teamBoxUp2.classList.add('_up-team')
	teamBoxes.classList.add('_short')
	footerIconsPc.classList.add('_hidden')
} else {
	footerIconsPhone.classList.add('_hidden')
	menuLinkPhoneArr.forEach(element => element.classList.add('menu__link_pc'))
}



//скролл
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
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