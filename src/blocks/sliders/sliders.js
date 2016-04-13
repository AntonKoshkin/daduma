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

	$('.opinion').owlCarousel({
		autoHeight	: true,
		dots			: false,
		items			: 1,
		loop			: true,
		mouseDrag	: false,
		nav			: true,
	});

	$('.usage__img').load(function() {
		$('.usage').owlCarousel({
			dots			: true,
			dotsEach		: 1,
			loop			: true,
			mouseDrag	: false,
			responsive	: {
				0		: {
					autoHeight	: true,
					items			: 1,
				},
				700	: {
					items			: 2,
				},
				980	: {
					items			: 3,
				},
			},
		});
	});

});