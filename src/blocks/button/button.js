jQuery(document).ready(function($) {
	$('body').on('click', '.button', function(event) {
		event.preventDefault();
		switch ($(this).find('.button__btn').data('act')) {
			case 'closeModal':
				$(this)
					.closest('.modal')
					.removeClass('modal--show');
				break;
		}
	});
});