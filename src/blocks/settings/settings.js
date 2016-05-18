jQuery(document).ready(function($) {
	$('body').on('click', '.settings__tab', function(event) {
		event.preventDefault();
		
		$(this)
			.addClass('settings__tab--active')
			.siblings()
			.removeClass('settings__tab--active')
			.closest('.settings')
			.find('.settings__content')
			.eq($(this).index())
			.addClass('settings__content--show')
			.siblings()
			.removeClass('settings__content--show');
	});
});