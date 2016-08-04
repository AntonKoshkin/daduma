// jQuery(document).ready(function($) {
// 	$('.profile-sets').slimScroll({
// 		allowPageScroll	: false,
// 		distance				: 0,
// 		height				: '100%',
// 		size					: 5,
// 	});
// });

$(document).ready(function() {
	$('body').on('click', '.profile-sets__edit-nick', function(event) {
		event.preventDefault();		
		$(this)
			.closest('.profile-sets__nick-block')
			.attr('data-cond', 'edit');
	});
});