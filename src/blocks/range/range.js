jQuery(document).ready(function($) {
	$('#pluses').slider({
		range		: true,
		min		: 5,
		max		: 25,
		values	: [5, 25],
		step		: 1,
		slide		: function(event, ui) {

			$('.range--green .range__min-value')
				.text(ui.values[0]);

			$('.range--green .range__max-value')
				.text(ui.values[1]);

			$('.range--green')
				.find('.range__min-value')
				.css('left', (100 / ($(this)
					.slider('option', 'max') - $(this)
						.slider('option', 'min'))) * (ui.values[0] - $(this)
							.slider('option', 'min')) + '%');

			$('.range--green')
				.find('.range__max-value')
				.css('left', (100 / ($(this)
					.slider('option', 'max') - $(this)
						.slider('option', 'min'))) * (ui.values[1] - $(this)
							.slider('option', 'min')) + '%');
		},
	});

	$('#minuses').slider({
		range		: true,
		min		: 5,
		max		: 25,
		values	: [5, 25],
		step		: 1,
		slide		: function(event, ui) {
			$('.range--red .range__min-value')
				.text(ui.values[0]);

			$('.range--red .range__max-value')
				.text(ui.values[1]);

			$('.range--red')
				.find('.range__min-value')
				.css('left', (100 / ($(this)
					.slider('option', 'max') - $(this)
						.slider('option', 'min'))) * (ui.values[0] - $(this)
							.slider('option', 'min')) + '%');

			$('.range--red')
				.find('.range__max-value')
				.css('left', (100 / ($(this)
					.slider('option', 'max') - $(this)
						.slider('option', 'min'))) * (ui.values[1] - $(this)
							.slider('option', 'min')) + '%');
		},
	});

	step	=	100 / ($(this)
							.closest('.range')
							.find('.range__input')
							.slider('option', 'max') - $(this)
																	.closest('.range')
																	.find('.range__input')
																	.slider('option', 'min'));

	$('.range--green')
		.find('.range__min-value')
		.css('left', 100 / ($('#pluses').closest('.range').find('.range__input').slider('option', 'max') -
			$('#pluses').closest('.range').find('.range__input').slider('option', 'min')) *
			($('#pluses').slider('option', 'values')[0] -
			$('#pluses').slider('option', 'min')) + '%');

	$('.range--green')
		.find('.range__max-value')
		.css('left', 100 / ($('#pluses').closest('.range').find('.range__input').slider('option', 'max') -
			$('#pluses').closest('.range').find('.range__input').slider('option', 'min')) *
			($('#pluses').slider('option', 'values')[1] -
			$('#pluses').slider('option', 'min')) + '%');

	$('.range--red')
		.find('.range__min-value')
		.css('left', 100 / ($('#minuses').closest('.range').find('.range__input').slider('option', 'max') -
			$('#minuses').closest('.range').find('.range__input').slider('option', 'min')) *
			($('#minuses').slider('option', 'values')[0] -
			$('#minuses').slider('option', 'min')) + '%');

	$('.range--red')
		.find('.range__max-value')
		.css('left', 100 / ($('#minuses').closest('.range').find('.range__input').slider('option', 'max') -
			$('#minuses').closest('.range').find('.range__input').slider('option', 'min')) *
			($('#minuses').slider('option', 'values')[1] -
			$('#minuses').slider('option', 'min')) + '%');

	$('.range--green .range__min-value')
		.text($('#pluses').slider('option', 'values')[0]);
		
	$('.range--green .range__max-value')
		.text($('#pluses').slider('option', 'values')[1]);

	$('.range--red .range__min-value')
		.text($('#minuses').slider('option', 'values')[0]);
		
	$('.range--red .range__max-value')
		.text($('#minuses').slider('option', 'values')[1]);
});