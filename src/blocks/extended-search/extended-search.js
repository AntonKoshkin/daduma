$(document).ready(function() {
	$('body').on('click', '.extended-search__expand', function(event) {
		event.preventDefault();
		
		$(this)
			.closest('.extended-search')
			.toggleClass('extended-search--opened');
	});
});