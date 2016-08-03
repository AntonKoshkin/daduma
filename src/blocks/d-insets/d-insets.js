$(document).ready(function() {
	$('body').on('click', '.d-insets__tab', function(event) {
		event.preventDefault();
		
		$(this)
			.attr('data-selected', 'true')
			.siblings()
			.attr('data-selected', 'false')
			.closest('.d-insets')
			.find('.d-insets__content')
			.eq($(this).index())
			.attr('data-show', 'true')
			.siblings()
			.attr('data-show', 'false');
	});
});