jQuery(document).ready(function($) {
	$('#pluses').slider({
		range		: true,
		min		: 0,
		max		: 500,
		values	: [75, 300],
		// slide		: function(event, ui) {
		// 	$('.range__min').text('$' + ui.values[0] + ' - $' + ui.values[1]);
		// },
	});

	$('#minuses').slider({
		range		: true,
		min		: 0,
		max		: 500,
		values	: [75, 300],
		// slide		: function(event, ui) {
		// 	$('.range__min').text('$' + ui.values[0] + ' - $' + ui.values[1]);
		// },
	});
});