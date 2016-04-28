$(document).ready(function() {
	$('body').on('click', '.close', function(event) {
		event.preventDefault();
		
		$(this)
			.closest('.modal')
			.removeClass('modal--show');
	});
});