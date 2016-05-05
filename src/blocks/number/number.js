$(document).ready(function() {
	if ($('.number').length) {
		$(window).scroll(function(event) {
			if (($('.number__quantity--sum').offset().top - $(window).height()) <= $(window).scrollTop()) {
				if ($('.number__quantity--sum').attr('data-finished') !== 'finished') {
					$('.number__quantity--sum').spincrement({
						thousandSeparator		: ' ',
						duration					: 2000,
					});

					$('.number__quantity--sum').attr('data-finished', 'finished');
				}
			}
		});
	}
});