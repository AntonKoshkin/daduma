$(document).ready(function() {
	$('#subj').select2({
	  placeholder					: 'Выберите тематику',
	  closeOnSelect				: true,
	  width							: '100%',
	  language						: 'ru',
	  minimumResultsForSearch	: Infinity,
	  // allowClear: true
	});

	$('#status').select2({
	  placeholder					: 'Выберите статус',
	  closeOnSelect				: true,
	  width							: '100%',
	  language						: 'ru',
	  minimumResultsForSearch	: Infinity,
	  // allowClear: true
	});

	var cityData = [
		{
			id		: 0,
			text	: 'Москва',
		},
		{
			id		: 1,
			text	: 'Санкт-Петербург',
		},
		{
			id		: 2,
			text	: 'Курск',
		},
		{
			id		: 3,
			text	: 'Москва',
		},
		{
			id		: 4,
			text	: 'Санкт-Петербург',
		},
		{
			id		: 5,
			text	: 'Курск',
		},
		{
			id		: 6,
			text	: 'Москва',
		},
		{
			id		: 7,
			text	: 'Санкт-Петербург',
		},
		{
			id		: 8,
			text	: 'Курск',
		},
	];

	$('#profileCity').select2({
		placeholder					: 'Город',
		closeOnSelect				: true,
		width							: '100%',
		language						: 'ru',
		minimumResultsForSearch	: 5,
		data							: cityData,
		allowClear					: true,
	});
});