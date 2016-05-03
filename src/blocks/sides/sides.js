jQuery(document).ready(function($) {
	if ($(window).width() > 962) {
		$('.sides__text')
			.filter(':first')
			.find('p')
			.each(function(index, el) {
				var
					thisP = $(el),
					siblP = $('.sides__content--red .sides__text')
									.find('p').eq(thisP.index());

				if (thisP.height() > siblP.height()) {
					siblP.height(thisP.height());
				} else {
					thisP.height(siblP.height());
				}
			});
	

		var
			numOfP	= 0,
			anexp		= 0;

		$('.sides__text')
			.each(function(index, el) {
				var a = $(el)
							.find('p')
							.length;

				if (a > numOfP) {
					numOfP = a;
				}

				if ($(el).outerHeight() > anexp) {
					anexp = $(el).outerHeight();
				}
			});

		if (numOfP > 4) {
			// $('.sides').addClass('sides--expandable');
			var fullHeight	= 0;

			$('.sides__expand').show();

			if ($('.sides__content--green p')
					.length >= $('.sides__content--red p').length) {

				$('.sides__content--green p')
					.each(function(index, el) {
						if (index < 4) {
							fullHeight += $(el).outerHeight();
						}
					});

			} else {
				$('.sides__content--red p')
					.each(function(index, el) {
						if (index < 4) {
							fullHeight += $(el).outerHeight();
						}
					});
			}

			$('.sides__text').height(fullHeight);
		}
	}

	$('body').on('click', '.sides__expander', function(event) {
		event.preventDefault();
		
		if ($('.sides__text').outerHeight() > fullHeight) {
			$('.sides__text')
				.animate({'height': fullHeight}, 300);

			$(this).text('Развернуть');
		} else {
			$('.sides__text')
				.animate({'height': anexp}, 300);

			$(this).text('Свернуть');
		}
	});

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