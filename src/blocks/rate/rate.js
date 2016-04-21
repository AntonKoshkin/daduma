$(document).ready(function() {
	$('body').on('click', '.rate__label', function(event) {
		$(this)
			.addClass('rate__label--active')
			.siblings()
			.removeClass('rate__label--active');
	});
});