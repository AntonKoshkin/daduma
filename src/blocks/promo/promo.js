// jQuery(document).ready(function($) {
// 	$('.promo__perks')
// 		.owlCarousel({
// 			center					: true,
// 			mouseDrug				: false,
// 			navRewind				: false,
// 			autoplay					: true,
// 			autoplayTimeout		: 3000,
// 			autoplayHoverPause	: true,
// 		});
// });

jQuery(document).ready(function($) {
	$('.promo__perks')
		.slick({
			accessibility	: false,
			// autoplay			: true,
			arrows			: false,
			infinite			: false,
			dots				: true,
			mobileFirst		: true,
			responsive		: [
				{
					breakpoint	: 500,
					settings		: {
						slidesToShow	: 2
					}
				},
				{
					breakpoint	: 800,
					settings		: {
						slidesToShow	: 3
					}
				},
				{
					breakpoint	: 1000,
					settings		: {
						slidesToShow	: 4,
						dots				: false
					}
				},
			]
		});
});