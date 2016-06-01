jQuery(document).ready(function($) {
	$('body').on('click', '.comment__like', function(event) {
		event.preventDefault();
		
		var numOfLikes = $(this).text();
		
		if ($(this).hasClass('comment__like--liked')) {
			numOfLikes--;
			
			$(this)
				.removeClass('comment__like--liked')
				.text(numOfLikes.toString());
		} else {
			numOfLikes++;

			$(this)
				.text(numOfLikes.toString())
				.addClass('comment__like--liked');
		}
	});

	commentCollapse();

	$('body').on('click', '.comment__more', function(event) {
		event.preventDefault();
		$(this)
			.closest('.comment__letter')
			.toggleClass('comment__letter--expand');
	});

	var windWidth = $(window).outerWidth(),
		resizedWidth = $(window).outerWidth(),
		breakpoint = 962;
});



function commentCollapse() {
	$('.comment__text-wrapper').each(function(index, el) {
		if ($(window).width() <= 962) {
			$(el).dotdotdot({
				height	: 70,
				watch		: true,
			});
		} else {
			$(el).dotdotdot({
				height	: 35,
				watch		: true,
			});
		}

		if ($(el).triggerHandler('isTruncated')) {
			$(el)
				.next('.comment__more')
				.show();
		} else {
			$(el)
				.next('.comment__more')
				.hide();
		}
	});
}