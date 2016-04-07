jQuery(document).ready(function($) {
	$('body').on('click', '.burger', function(event) {
		event.preventDefault();

		$('.navigation').toggleClass('navigation--open');

		if ($('.navigation').hasClass('navigation--open')) {
			$('html').css('overflow-y', 'hidden');
		} else {
			$('html').css('overflow-y', 'auto');
		}
	});
});