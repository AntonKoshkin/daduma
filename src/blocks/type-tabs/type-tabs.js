jQuery(document).ready(function($) {
	$('body').on('click', '.type-tabs__title', function(event) {
		event.preventDefault();
		
		$(this)
			.closest('.type-tabs__tab')
			.addClass('type-tabs__tab--active')
			.siblings()
			.removeClass('type-tabs__tab--active');

		$(this)
			.closest('.about-act__content')
			.find('.diagram')
			.removeClass('diagram--show')
			.eq($(this).closest('.type-tabs__tab').index())
			.addClass('diagram--show');
	});
});