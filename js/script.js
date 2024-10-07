// комент от димы 1
// комент от димы 2
const swiper = new Swiper('.slider-materials', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
});


window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});