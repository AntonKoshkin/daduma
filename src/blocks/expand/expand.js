function expand() {
	$('.expand').each(function(index, el) {
		var
			outHeight	=	$(el).find('.expand__text-wrapper').height(),
			inHeight		=	$(el).find('.expand__text').height(),
			expWrap		=	$(el).find('.expand__expand'),
			expBtn		=	$(el).find('.expand__expand');

		if (outHeight < inHeight) {
			$(el).addClass('expand--collapse');
		} else {
			$(el).removeClass('expand--collapse');
		}
	});
}

$(document).ready(function() {
	expand();

	$(window).resize(function(event) {
		expand();
	});

	$('body').on('click', '.expand__expander', function(event) {
		event.preventDefault();
		
		var
			numOfLines	=	$(this)
									.closest('.expand')
									.attr('data-num-of-lines'),
			tHeight		=	$(this)
									.closest('.expand')
									.find('.expand__text')
									.height(),
			condition	=	$(this).text();
		
		if (condition === 'Развернуть') {
			$(this)
				.text('Свернуть')
				.closest('.expand--collapse')
				.find('.expand__text-wrapper')
				.css('max-height', tHeight);
		} else {
			$(this)
				.text('Развернуть')
				.closest('.expand--collapse')
				.find('.expand__text-wrapper')
				.css('max-height', numOfLines+'em');
		}
	});
});