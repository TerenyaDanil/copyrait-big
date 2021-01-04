


burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}

////////////////////////////////////////////

var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
	el.onclick = function () {
		el.classList.toggle("active");
		el.previousElementSibling.classList.toggle("active");
	}
});

//////////////////////////////////////////////

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href')

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}



///////////////////////////////////////////


let header = gsap.timeline({
	scrollTrigger: {
		trigger: ".header",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	header.from(".header__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "+=0.2")
		.from(".header__text", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".header__btn", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".header__woman", { duration: 1, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")

} else {
	header.from(".header__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".header__woman", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".header__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".header__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}


//////////////////////////////////////////////////


let cases = gsap.timeline({
	scrollTrigger: {
		trigger: ".cases",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	cases.from(".cases__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".cases__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".cases__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".cases__inner-item-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

} else {
	cases.from(".cases__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".cases__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".cases__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".cases__inner-item-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

}



//////////////////////////////////////////////////


let forr = gsap.timeline({
	scrollTrigger: {
		trigger: ".for",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	forr.from(".for__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".for__inner-img-1", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".for__inner-img-2", { duration: 0.8, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")
		.from(".for__inner-img-3", { duration: 1, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".for__inner-img-4", { duration: 1, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")
		.from(".for__btn", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

} else {
	forr.from(".for__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".for__inner-img-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for__inner-img-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for__inner-img-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for__inner-img-4", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".for__btn", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


}




// ///////////////////////////////////////////////


let program = gsap.timeline({
	scrollTrigger: {
		trigger: ".program",   // pin the trigger element while active
		start: "top center",




	}
});


program.from(".program__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")


//////////////////////////////////////////////////////




let inside = gsap.timeline({
	scrollTrigger: {
		trigger: ".inside",   // pin the trigger element while active
		start: "top center",




	}
});


inside.from(".inside__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".inside__inner-img-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inside__inner-img-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inside__inner-img-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


////////////////////////////////////////////////////////////////////


let students = gsap.timeline({
	scrollTrigger: {
		trigger: ".students",   // pin the trigger element while active
		start: "top center",




	}
});


students.from(".students__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".students__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".students__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".students__item-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".students__btn", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



//////////////////////////////////////////////


let process = gsap.timeline({
	scrollTrigger: {
		trigger: ".process",   // pin the trigger element while active
		start: "top center",




	}
});


program.from(".process__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")



/////////////////////////////////////////////


let tarif = gsap.timeline({
	scrollTrigger: {
		trigger: ".tarif",   // pin the trigger element while active
		start: "top center",




	}
});


tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".tarif__time", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".tarif__intro", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


/////////////////////////////////////////////


let plan = gsap.timeline({
	scrollTrigger: {
		trigger: ".plan",   // pin the trigger element while active
		start: "top center",




	}
});


plan.from(".plan__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".plan__text", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


/////////////////////////////////////////////


let info = gsap.timeline({
	scrollTrigger: {
		trigger: ".info",   // pin the trigger element while active
		start: "top center",




	}
});


info.from(".info__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".info__intro", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".info__about", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".info__inner-item-1", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".info__inner-item-2", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".info__inner-item-3", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


/////////////////////////////////////////////


let author = gsap.timeline({
	scrollTrigger: {
		trigger: ".author",   // pin the trigger element while active
		start: "top center",




	}
});


author.from(".author__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".author__img", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

/////////////////////////////////////////////


let rev = gsap.timeline({
	scrollTrigger: {
		trigger: ".rev",   // pin the trigger element while active
		start: "top center",




	}
});


rev.from(".rev__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".inner-rev__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-10", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-11", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".inner-rev__item-12", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".rev__line", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".rev__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

/////////////////////////////////////////////


let qustions = gsap.timeline({
	scrollTrigger: {
		trigger: ".qustions",   // pin the trigger element while active
		start: "top center",




	}
});


qustions.from(".qustions__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
	.from(".qustions__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	.from(".qustions__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")




/////////////////////////////////////////////





let footer = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",   // pin the trigger element while active
		start: "top bottom"

	}
});


if (window.innerWidth > 737) {
	footer.from(".footer__logo", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "+=0.2")

		.from(".footer__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



} else {


}