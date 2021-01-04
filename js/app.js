


burger = document.querySelector('.header__burger');
body = document.querySelector('body');

burger.onclick = function () {
	burger.classList.toggle('active');
	body.classList.toggle('lock');
}

var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
	el.onclick = function () {
		el.classList.toggle("active");
		el.previousElementSibling.classList.toggle("active");
	}
});






// let video = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".video",   // pin the trigger element while active
// 		start: "top center",




// 	}
// });

// if (window.innerWidth > 737) {
// 	video.from(".video__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 }, "+=0.2")
// 		.from(".video__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
// 		.from(".wrap-video__video", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.4")
// 		.from(".wrap-video__text", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
// 		.from(".wrap-video__line", { duration: 0.9, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")

// 		.from(".content-video__item-1", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
// 		.from(".content-video__item-2", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
// } else {
// 	video.from(".video__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
// 		.from(".video__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
// 		.from(".wrap-video__video", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.4")
// 		.from(".wrap-video__text", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


// 		.from(".content-video__item-1", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
// 		.from(".content-video__item-2", { duration: 1.1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

// }




// ///////////////////////////////////////////////

// let footer = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".footer",   // pin the trigger element while active
// 		start: "top bottom"

// 	}
// });


// if (window.innerWidth > 737) {
// 	footer.from(".footer__logo", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "+=0.2")

// 		.from(".footer__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



// } else {


// }