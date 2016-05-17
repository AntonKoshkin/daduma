// modal closing
$(document).ready(function() {
	$('body').on('click', '.modal__bg, .modal__close, .btn-submit--just-close .btn-submit__input, .btn-submit--modal .btn-submit__input', function(event) {
		event.preventDefault();
		$(this)
			.closest('.modal')
			.removeClass('modal--show');
		$('html').removeClass('no-scroll');
	});
});

// modal opening
$(document).ready(function() {
	$('body').on('click', '[data-modal-link]', function(event) {
		event.preventDefault();
		var modalWindow = $(this).attr('data-modal-link');

		if ($(modalWindow).length) {
			if ($(this).closest('.modal')) {
				$(this)
					.closest('.modal')
					.removeClass('modal--show');
				$('html').addClass('no-scroll');
			}

			$(modalWindow).addClass('modal--show');
			$('html').addClass('no-scroll');
		}
	});
});