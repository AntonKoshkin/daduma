jQuery(document).ready(function($) {
	$('body').on('click', '.comment__like', function(event) {
		event.preventDefault();
		
		var numOfLikes = $(this).text();
		
		if ($(this).hasClass('.comment__like--liked')) {
			// var newNumOfLikes = (+numOfLikes - 1).toString();

			
			$(this)
				.removeClass('.comment__like--liked')
				// .text(newNumOfLikes);
				.text((numOfLikes--).toString());
		} else {
			$(this)
				.text(numOfLikes++)
				.addClass('.comment__like--liked')
			console.log(numOfLikes);
		}
	});
});