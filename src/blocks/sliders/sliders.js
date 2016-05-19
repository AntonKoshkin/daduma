jQuery(document).ready(function($) {
	$('.promo__perks').owlCarousel({
		mouseDrag	: false,
		responsive	: {
			0		: {
				items		: 1,
			},
			500	: {
				items		: 2,
			},
			980	: {
				items		: 4,
				dots		: false,
				nav		: false,
			}
		},
	});

	// $('body').on('click', '.about-act__cont-title', function(event) {
	// 	$('.about-act__diagrams').owlCarousel({
	// 		dots			: false,
	// 		loop			: true,
	// 		mouseDrag	: true,
	// 		autoHeight	: false,
	// 		responsive	: {
	// 			0		: {
	// 				items		: 1,
	// 				slideBy	: 1,
	// 			},
	// 		},
	// 	});
	// });


	// $('.opinion').owlCarousel({
	// 	autoHeight	: true,
	// 	dots			: false,
	// 	items			: 1,
	// 	loop			: true,
	// 	mouseDrag	: false,
	// 	nav			: true,
	// });

	$('.usage').owlCarousel({
		dots			: true,
		dotsEach		: 1,
		loop			: false,
		mouseDrag	: false,
		responsive	: {
			0		: {
				autoHeight	: true,
				items			: 1,
				slideBy		: 1,
				dotsEach		: 1,
			},
			700	: {
				items			: 2,
				slideBy		: 2,
				dotsEach		: 2,
			},
			980	: {
				items			: 3,
				slideBy		: 3,
				dotsEach		: 3,
			},
		},
	});
});