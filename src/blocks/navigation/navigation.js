jQuery(document).ready(function($) {
	$('body').on('click', '.navigation__bg', function(event) {
		event.preventDefault();

		$('.navigation').removeClass('navigation--open');
		$('html').css('overflow-y', 'auto');
	});
});