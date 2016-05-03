jQuery(document).ready(function($) {
	$('body').on('click', '.quote__img', function(event) {
		event.preventDefault();

		console.log('qwe');
		
		$('.quote__img')
			.addClass('quote__img--tuda-suda')
			.delay(300)
			.queue(function() {
				$(this)
					.removeClass('quote__img--tuda-suda')
					.dequeue();
			});
	});
});