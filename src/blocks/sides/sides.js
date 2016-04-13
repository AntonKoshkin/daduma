jQuery(document).ready(function($) {
	$('body').on('click', '.sides__title', function(event) {
		event.preventDefault();
		
		$(this)
			.addClass('sides__title--active')
			.siblings()
			.removeClass('sides__title--active')
			.closest('.sides__wrapper')
			.find('.sides__content')
			.eq($(this).index())
			.addClass('sides__content--show')
			.siblings()
			.removeClass('sides__content--show');
	});
});