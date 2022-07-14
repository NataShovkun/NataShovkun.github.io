$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$('.page-up').fadeIn('slow');
		} else {
			$('.page-up').fadeOut('slow');
		}
	});

	// $("a[href='#up']").click(function(){
	// 	const _href = $(this).attr('href');
	// 	$('html, body').animate({scrollTop: $(_href).offset().top+'px'});
	// 	return false;
	// });

	const switchTabs = () => {
		const tabs = document.querySelectorAll('.portfolio__tab'),
				content = document.querySelectorAll('.portfolio__content');

		tabs.forEach((e, i) => {
			e.addEventListener('click', () => {
				tabs.forEach(el => el.classList.remove('portfolio__tab_active'));
				e.classList.add('portfolio__tab_active');
				
				content.forEach(e => e.classList.remove('portfolio__content_active'));
				content[i].classList.add('portfolio__content_active');
			})
		})
	};

	switchTabs();

	function smoothScroll (el) {
		$(el).click(function(){
			const _href = $(this).attr('href');
			$('html, body').animate({scrollTop: $(_href).offset().top+'px'});
			return false;
		});
	} 

	smoothScroll("a[href='#up']");
	smoothScroll("nav a[href^='#']");
	smoothScroll(".promo a[href^='#']");
	
});

const hamburger = document.querySelector('.hamburger'),
	closeBtn = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu'),
	menuLink = document.querySelectorAll('.menu__link a');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	menu.classList.remove('active');
});

menuLink.forEach(el => el.addEventListener('click', () => {
	menu.classList.remove('active');
}));

const progress = document.querySelectorAll('.skills__ratings-progress span'),
	counter = document.querySelectorAll('.skills__ratings-counter');

function pBarCalc () {
	counter.forEach((el, i) => {
		progress[i].style.width = el.innerHTML;
	})
}
pBarCalc();

const promoLink = document.querySelectorAll('.promo__link');

promoLink.forEach(el => {
	el.addEventListener('click', () => {
		if (!el.classList.contains('button')) {
			promoLink.forEach(el => el.classList.toggle('button'));
		}
	});
});

// Gallery

let galleryPrint = new SimpleLightbox('.galleryPrint a');
let galleryCollages = new SimpleLightbox('.galleryCollages a');
let galleryBanners = new SimpleLightbox('.galleryBanners a');
let galleryDrawings = new SimpleLightbox('.galleryDrawings a');

galleryDrawings.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

galleryCollages.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

galleryBanners.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});


galleryDrawings.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});