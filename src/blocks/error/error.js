$(document).ready(function() {
	$('body').on('click', '.quote__img', function(event) {
		event.preventDefault();
		
		$('.error')
			.addClass('error--show')
			.delay(5000)
			.queue(function() {
				$('.error')
					.removeClass('error--show')
					.dequeue();
			});
	});
});