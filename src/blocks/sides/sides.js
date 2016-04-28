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

// $(document).ready(function() {
// 	var
// 		leftSide		=	$('.sides__content--green .sides__text'),
// 		rightSide	=	$('.sides__content--red .sides__text');

// 	if (leftSide.outerHeight() > rightSide.outerHeight()) {
// 		var
// 			rsHeight	=	rightSide.outerHeight(),
// 			lsPars	=	leftSide.find('p');

// 		lsPars.each(function(index, el) {
// 			if (($(el).position().top + $(el).outerHeight()) > rightSide.height()) {
// 				console.log($(el).position().top + $(el).outerHeight() + '   ' + rightSide.height());

// 				rsHeight -= $(el).outerHeight();
// 			}
// 		});

// 		leftSide.height(rsHeight);
// 	}
// });