const hamburgerMenu = document.querySelector('.menu-hamburger');
const leftNav = document.querySelector('.left-nav');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('change');

	if (hamburgerMenu.getAttribute('class') === 'menu-hamburger change') {
		leftNav.style.width = '80%';
		leftNav.style.paddingLeft = '2em';
		console.log('change');
	} else {
		leftNav.style.width = '0%';
		leftNav.style.paddingLeft = '0px';
	}
});
