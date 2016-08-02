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
		allowClear					: true,
		closeOnSelect				: true,
		data							: cityData,
		language						: 'ru',
		minimumResultsForSearch	: 5,
		placeholder					: 'Город',
		width							: '100%',
	});

	$('#fraction').select2({
		allowClear					: true,
		closeOnSelect				: true,
		language						: 'ru',
		minimumResultsForSearch	: Infinity,
		placeholder					: 'Выберите фракцию',
		width							: '100%',
	});

	$('#doerCity').select2({
		allowClear					: true,
		closeOnSelect				: true,
		data							: cityData,
		language						: 'ru',
		minimumResultsForSearch	: 5,
		placeholder					: 'Введите населенный пункт',
		width							: '100%',
	});

	// $('#doerName').select2({
	// 	allowClear					: true,
	// 	// data							: cityData,
	// 	closeOnSelect				: true,
	// 	language						: 'ru',
	// 	minimumResultsForSearch	: 5,
	// 	placeholder					: 'Введите ФИО депутата',
	// 	width							: '100%',
	// });
});