// бургер
const burger = document.querySelectorAll('.burger');
const menu = document.querySelector(".menu")
const nav = document.querySelector('.menu__nav');
const navItems = nav.querySelectorAll('a');
const body = document.body;

burger.forEach((event) => {
    event.addEventListener('click', () => {
        body.classList.toggle('stop-scroll');
        body.classList.toggle('body-overlay');
        menu.classList.toggle('menu-overlay');
        nav.classList.toggle('nav--visible');
      });
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    body.classList.remove('overlay');
    menu.classList.remove('menu-overlay');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  });
});

$(document).ready(function(){
    // слайдер
	$(".testimonial__slider").slick({
		arrows: false,
		dots: true,

        slidesToShow: 2,
        slidesToScroll: 2,

		speed: 400,
		easing: "ease",

        responsive: [
			{
			  breakpoint: 960, // - от какой ширины изменять настройки(1024 и ниже)
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
        ]
	});
});