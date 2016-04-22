// function expanderShow() {
// 	var
// 		descHeight	=	$('.act__description').height(),
// 		wrapHeight	=	$('.act__text-wrapper').height(),
// 		expand		=	$('.act__expand'),
// 		expander		=	$('.act__expander');

// 	if (descHeight < wrapHeight) {
// 		$('.act__description').addClass('act__description--collapse');
// 	} else {
// 		$('.act__description').removeClass('act__description--collapse');
// 	}
// }

// $(document).ready(function() {
// 	expanderShow();

// 	$(window).resize(function(event) {
// 		expanderShow();
// 	});

// 	$('body').on('click', '.act__expander', function(event) {
// 		event.preventDefault();
		
// 		var
// 			wrapHeight	=	$('.act__text-wrapper').height(),
// 			condition	= $(this).text();
		
// 		if (condition === 'Развернуть') {
// 			$(this)
// 				.text('Свернуть');

// 			$('.act__description--collapse')
// 				.css('max-height', wrapHeight);
// 		} else {
// 			$(this)
// 				.text('Развернуть');

// 			$('.act__description--collapse')
// 				.css('max-height', '9em');
// 		}
// 	});
// });