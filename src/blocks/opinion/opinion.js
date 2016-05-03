$(document).ready(function() {
	$('body').on('click', '.opinion__tab', function(event) {
		event.preventDefault();
		
		$('.opinion__item')
			.eq($(this).index())
			.addClass('opinion__item--show')
			.siblings()
			.removeClass('opinion__item--show');

		$(this)
			.addClass('opinion__tab--active')
			.siblings()
			.removeClass('opinion__tab--active');
	});
});