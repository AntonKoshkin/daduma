$(document).ready(function() {
	$(window).scroll(function(event) {
		if (($('.number__quantity--sum').offset().top - $(window).height() + 100) <= $(window).scrollTop()) {
			if ($('.number__quantity--sum').attr('data-finished') !== 'finished') {
				$('.number__quantity--sum').spincrement({
					thousandSeparator		: ' ',
					duration					: 2000,
				});

				$('.number__quantity--sum').attr('data-finished', 'finished');
			}
		}
	});
});