if ($('.slider__body').length > 0) {
	$('.slider__body').slick ({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoPlaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}

if ($('.slider-two__body').length > 0) {
	$('.slider-two__body').slick ({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoPlaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}

if ($('.slider-three').length > 0) {
	$('.slider-three').slick ({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoPlaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}