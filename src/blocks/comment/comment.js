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
});