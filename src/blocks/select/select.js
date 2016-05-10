$(document).ready(function() {
	$('#subj').select2({
	  placeholder		: 'Выберите тематику',
	  closeOnSelect	: true,
	  width				: '100%',
	  language			: 'ru',
	  minimumResultsForSearch: Infinity,
	  // allowClear: true
	});
	$('#status').select2({
	  placeholder		: 'Выберите статус',
	  closeOnSelect	: true,
	  width				: '100%',
	  language			: 'ru',
	  minimumResultsForSearch: Infinity,
	  // allowClear: true
	});
});