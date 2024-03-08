///////////////////////////////////////
// NAV
///////////////////////////////////////
const burger = document.querySelector(".burger");
const menu = document.querySelector("ul.main-menu");
const links = menu.querySelectorAll("li");

const navToggle = document.querySelector(".nav-toggle");
const closeMenu = document.querySelectorAll(".main-menu li");

var tl = gsap.timeline({ paused: true });

tl.to(menu, {
	duration: 0.6,
	autoAlpha: 1,
	height: "100dvh",
	y: "-82px",
	ease: "expo.inOut",
});
tl.from(
	links,
	{
		duration: 0.6,
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
	navToggle.classList.toggle("active");
});

closeMenu.forEach((el) => {
	el.addEventListener("click", (e) => {
		tl.reversed(!tl.reversed());
		navToggle.classList.toggle("active");
	});
});

///////////////////////////////////////
// SWIPER
///////////////////////////////////////

// TREATMENTS SLIDER
const swiperTreatments = new Swiper(".swiper-treatments", {
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 2,
	spaceBetween: 0,
	speed: 500,
	breakpoints: {
		// when window width is >= 500px
		500: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		960: {
			slidesPerView: 4,
		},
		1281: {
			slidesPerView: 5,
		},
		1600: {
			slidesPerView: 6,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
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
		500: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 5,
		},
		960: {
			slidesPerView: 6,
		},
		1024: {
			slidesPerView: 7,
		},
		1280: {
			slidesPerView: 8,
		},
		1920: {
			slidesPerView: 9,
		},
		2048: {
			slidesPerView: 12,
		},
	},
});

//////////////////////////////////////
// MAKE THE CURRENT DAY BOLD
//////////////////////////////////////

// CREATE AN ARRAY OF WEEKDAYS
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// CREATE A NEW DATE OBJECT - THIS WILL BE TODAY'S DATE AND TIME
var todaysDate = new Date();

// GET THE NUMBER OF THE DAY OF THE WEEK. 0 IF SUNDAY, 1 IF MONDAY, ETC.
var dayNumber = todaysDate.getDay();

// USING THE "DAYNUMBER" VARIABLE, GET THE DAY STRING BY ITS INDEX FROM THE "DAYS" ARRAY
var dayString = days[dayNumber];

// TARGET THE ELEMENT ON THE PAGE THAT HAS THE ID THAT MATCHES THE "DAYSTRING"
var dayElement = document.getElementById(dayString);

// ADD THE CLASS "BOLD" TO "DAYELEMENT"
dayElement.classList.add("bold");

//////////////////////////////////////
// YEAR IN THE FOOTER
//////////////////////////////////////

const date = document.querySelector("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

//////////////////////////////////////
// PRICELIST
//////////////////////////////////////
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".pricelist-flex-left h3", {
// 	scrollTrigger: {
// 		trigger: ".pricelist-flex",
// 		start: "top 200px",
// 		end: "bottom center",
// 		scrub: true,
// 		markers: true,
// 		// pin: true,
// 	},
// 	y: "500px",
// 	// repeat: -1,
// 	// yoyo: true,
// });

// let pricelistTitle = gsap.utils.toArray(".pricelist-flex-left");

// pricelistTitle.forEach(function (element, index) {
// 	let tl = gsap
// 		.timeline({
// 			scrollTrigger: {
// 				trigger: element,
// 				start: "top 50%",
// 				end: "+=200px",
// 				scrub: true,
// 				markers: true,
// 			},
// 		})
// 		.to(element.querySelector("h3"), {
// 			backgroundImage: "linear-gradient(45deg, #000 -100%, #eee 50%, #000 100%)",
// 			duration: 1,
// 			ease: "none",
// 		})
// 		.from(
// 			element.querySelectorAll("p"),
// 			{
// 				duration: 1,
// 				opacity: 0,
// 				y: 100,
// 				stagger: 1,
// 			},
// 			1
// 		);
// });

// let pricelistTitle = gsap.utils.toArray(".pricelist-flex-left");

// console.log("JavaScript Loaded!");

// let texts = document.querySelectorAll(".text__effect");

// const newTl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".pricelist-flex",
// 		start: "top center",
// 		end: "bottom top+=10%",
// 		scrub: true,
// 		markers: true,
// 	},
// });

// texts.forEach((text, index) => {
// 	const overlay = text.querySelector(".text__overlay");

// 	newTl.to(overlay, {
// 		scaleX: 0,
// 	});
// });
