$(document).ready(function() {
	$('body').on('click', '.modal__bg, .modal__close', function(event) {
		event.preventDefault();
		$(this)
			.closest('.modal')
			.removeClass('modal--show');
	});
});