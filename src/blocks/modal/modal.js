// modal closing
$(document).ready(function() {
	$('body').on('click', '.modal__bg, .modal__close, .btn-submit--modal .btn-submit__input', function(event) {
		event.preventDefault();
		$(this)
			.closest('.modal')
			.removeClass('modal--show');
	});
});

// modal opening
$(document).ready(function() {
	$('body').on('click', '[data-modal-link]', function(event) {
		event.preventDefault();
		var modalWindow = $(this).attr('data-modal-link');

		if ($(this).closest('.modal')) {
			$(this)
				.closest('.modal')
				.removeClass('modal--show');
		}

		$(modalWindow).addClass('modal--show');
	});
});