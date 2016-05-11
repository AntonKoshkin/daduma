$(document).ready(function() {
	$('#publStart').datepicker({
		defaultDate		: '-1w',
		changeMonth		: true,
		numberOfMonths	: 1,
		maxDate			: '+0w',
		onClose			: function(selectedDate) {
			$('#publEnd').datepicker('option', 'minDate', selectedDate);
		}
	});

	$('#publEnd').datepicker({
		defaultDate		: '+0w',
		changeMonth		: true,
		numberOfMonths	: 1,
		maxDate			: '+0w',
		onClose			: function(selectedDate) {
			$('#publStart').datepicker('option', 'maxDate', selectedDate);
		}
	});

	$.datepicker.setDefaults($.datepicker.regional['ru']);
});