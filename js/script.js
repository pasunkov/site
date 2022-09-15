const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
	menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});