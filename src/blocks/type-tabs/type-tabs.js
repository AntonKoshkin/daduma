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
			.find('.about-act__type')
			.eq($(this).closest('.type-tabs__tab').index())
			.css('display', 'flex')
			.siblings()
			.hide();

		var
			thisPosLeft	=	$(this)
									.closest('.type-tabs__tab')
									.position()
									.left + 7,
			thisWidth	=	$(this).width() + 1;

		$('.type-tabs__slice')
			.css({
				left: thisPosLeft,
				width: thisWidth
			});
	});
});