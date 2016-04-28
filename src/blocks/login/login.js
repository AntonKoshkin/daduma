jQuery(document).ready(function($) {
	$('body').on('click', '[data-binded-form]', function(event) {
		event.preventDefault();
		
		if (!$(this).hasClass('.login__btn--active')) {
			var formToShow = $(this).attr('data-binded-form');
			
			$(this)
				.addClass('login__btn--active')
				.siblings('.login__btn')
				.removeClass('login__btn--active');

			$(formToShow)
				.addClass('form--show')
				.siblings()
				.removeClass('form--show');
		}

	});
});