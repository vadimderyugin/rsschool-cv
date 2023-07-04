const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('.body');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('active');
});
nav.addEventListener('click', () => {
	burger.classList.remove('active');
	nav.classList.remove('active');
	body.classList.remove('active');
})