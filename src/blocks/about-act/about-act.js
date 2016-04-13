jQuery(document).ready(function($) {
	$('.about-act__cont-content')
		.hide();

	if ($('body').width() > 962) {
		$('.about-act__cont-content')
			.filter(':first')
			.show();
	}

	$('body').on('click', '.about-act__cont-title:not(.about-act__cont-title--btn)', function(event) {
		event.preventDefault();

		var contPos	= 0;

		if (window.matchMedia('(max-width: 940px)').matches) {
			$(this)
				.next('.about-act__cont-content')
				.slideToggle(300)
				.closest('.about-act__content')
				.siblings()
				.find('.about-act__cont-content')
				.slideUp(300);
		}
	});

	$('body').on('click', '.about-act__tab:not(.about-act__tab--btn)', function(event) {
		event.preventDefault();

		$(this)
			.addClass('about-act__tab--active')
			.siblings()
			.removeClass('about-act__tab--active');

		$(this)
			.closest('.about-act__tabs')
			.next('.about-act__contents')
			.find('.about-act__content')
			.eq($(this).index())
			.find('.about-act__cont-content')
			.show()
			.closest('.about-act__content')
			.siblings()
			.find('.about-act__cont-content')
			.hide();
	});
});

jQuery(document).ready(function($) {
	var windWidth = $(window).outerWidth(),
		resizedWidth = $(window).outerWidth(),
		breakpoint = 962;

	$(window).resize(function(event) {

		resizedWidth = $(window).outerWidth();

		if ((windWidth <= breakpoint) && (resizedWidth > breakpoint)) {
			windWidth = $(window).outerWidth();
			$('.about-act__tab')
				.removeClass('about-act__tab--active')
				.filter(':first')
				.addClass('about-act__tab--active');

			$('.about-act__cont-content')
				.hide()
				.filter(':first')
				.show();
		} else if ((windWidth > breakpoint) && (resizedWidth <= breakpoint)) {
			windWidth = $(window).outerWidth();
			$('.about-act__cont-content').hide();
		}
	});


});