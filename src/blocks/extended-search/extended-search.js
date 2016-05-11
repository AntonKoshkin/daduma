$(document).ready(function() {
	$('body').on('click', '.extended-search__expand', function(event) {
		event.preventDefault();
		
		$(this)
			.closest('.extended-search')
			.find('.extended-search__body')
			.slideToggle(300);
	});
});