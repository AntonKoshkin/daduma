jQuery(document).ready(function($) {
	$('body').on('click', '.button__btn', function(event) {
		event.preventDefault();
		switch ($(this).data('act')) {
			case 'closeModal':
				$(this)
					.closest('.modal')
					.removeClass('modal--show');
				break;
		}

		if ($(this).attr('data-open-hidden')) {
			var outer = $('#'+$(this).attr('data-open-hidden'));

			if (!outer.hasClass('hidden-area--open')) {
				outer.addClass('hidden-area--open');
			}
		}
	});
});