const aa = 10;
// Custom Scripts
// Burger menu
const burger = document.querySelector('.burger'),
	body = document.querySelector('body');

function burgerMenuFunc() {
	const burgerMenu = burger.querySelector('.burger__menu'),
		burgerBtn = burger.querySelector('.burger__btn');

	burgerBtn.addEventListener('click', () => {
		if (!burgerMenu.classList.contains('active')) {
			burgerMenu.classList.add('active')
			burgerBtn.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})

	// navbar breakpoints
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
if (burger) {
	burgerMenuFunc()
}

// Fixed menu when scroll
function fixedNav() {
	const nav = document.querySelector('nav')

	// 
	const breakpoints = 1
	if (window.scrollY >= breakpoints) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)

// tabs
const permits = document.querySelector(".permits")

permits.addEventListener('click', (e) => {
	if (e.target.closest(".permits__btn")) {
		const permit = e.target.closest(".permits__item")

		permit.querySelector(".permits__btn").classList.toggle("show")
		permit.querySelector(".permits__body").classList.toggle("show")
	}
})


// Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 2,
	// centerInsufficientSlides: true,
	spaceBetween: 10,
	speed: 800,
	initialSlide: 0,

	// Navigation arrows
	navigation: {
		nextEl: '.about__next',
		prevEl: '.about__prev',
	},
});