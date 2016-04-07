jQuery(document).ready(function($) {
	$('body').on('click', '.navigation__item--openable .navigation__link', function(event) {
		event.preventDefault();
		
		$(this)
			.siblings('.navigation__subnav')
			.toggleClass('navigation__subnav--open');
	});

	$('body').on('click', '.navigation__bg', function(event) {
		event.preventDefault();

		$('.navigation').removeClass('navigation--open');
		$('html').css('overflow-y', 'auto');
	});
});