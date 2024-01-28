///////////////////////////////////////
// NAV
///////////////////////////////////////
const burger = document.querySelector(".burger");
const menu = document.querySelector("ul.main-menu");
const links = menu.querySelectorAll("li");

var tl = gsap.timeline({ paused: true });

tl.to(menu, {
	duration: 1,
	autoAlpha: 1,
	// THIS WAS 60
	height: "100dvh",
	// y: "-10rem",
	y: "-100px",
	ease: "expo.inOut",
});
tl.from(
	links,
	{
		duration: 1,
		autoAlpha: 0,
		// y: 20,
		stagger: 0.1,
		ease: "expo.inOut",
	},
	"-=0.5"
);

tl.reverse();

burger.addEventListener("click", () => {
	tl.reversed(!tl.reversed());
	const navToggle = document.querySelector(".nav-toggle");
	navToggle.classList.toggle("active");
});

///////////////////////////////////////
// AOS
///////////////////////////////////////
// INITIALIZE
AOS.init();

///////////////////////////////////////
// SWIPER
///////////////////////////////////////
// TREATMENTS
const swiperTreatments = new Swiper(".swiper-treatments", {
	autoplay: {
		delay: 1000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	loop: true,
	// ON MOBILE (SMALLEST WIDTH)
	slidesPerView: 2,
	spaceBetween: 0,
	speed: 6000,
	breakpoints: {
		// when window width is >= 500px
		500: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		// 640: {
		// 	slidesPerView: 2,
		// },
		// when window width is >= 768px
		768: {
			slidesPerView: 3,
		},
		// when window width is >= 960px
		960: {
			slidesPerView: 4,
		},
	},
});

// FEATURED IN
const swiperFeaturedIn = new Swiper(".swiper-featured-in", {
	loop: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: false,
	},
	// ON MOBILE (SMALLEST WIDTH)
	slidesPerView: 2,
	spaceBetween: 60,
	speed: 4000,
	breakpoints: {
		// when window width is >= 500px
		500: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 5,
		},
		// when window width is >= 960px
		960: {
			slidesPerView: 6,
		},
		// when window width is >= 1024px
		1024: {
			slidesPerView: 7,
		},
		// when window width is >= 1280px
		1280: {
			slidesPerView: 8,
		},
		// when window width is >= 1920px
		1920: {
			slidesPerView: 9,
		},
		// when window width is >= 2048px
		2048: {
			slidesPerView: 12,
		},
	},
});

///////////////////////////////////////
// YEAR IN THE FOOTER
///////////////////////////////////////
const date = document.querySelector("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
