function alphabetWith(corrector) {
	var 
		lettersWidth	=	$('.alphabet__content').outerWidth() -
									$('.alphabet__title').outerWidth() -
									$('.alphabet__btn--all').outerWidth() -
									$('.alphabet__btn--prev').outerWidth() -
									$('.alphabet__btn--next').outerWidth(),
		numOfLetters	=	Math.floor(lettersWidth/30);
		first				=	typeof corrector === 'number' ? corrector : 0;

	$('.alphabet__btn--letter').each(function(index, el) {
		if (first <= index && index < numOfLetters + first) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
}

$(document).ready(function() {
	var
		corrector	=	0;

	$('.alphabet__btn--letter').hide();

	alphabetWith('first');

	$(window).resize(function(event) {
		corrector = 0;
		alphabetWith();
	});

	$('body').on('click', '.alphabet__btn--next', function(event) {
		var visLetters = 0;

		$('.alphabet__btn--letter').each(function(index, el) {
			if ($(this).css('display') !== 'none') {
				visLetters++;
			}
		});


		if (corrector + visLetters <= 24) {
			corrector += 4;
			alphabetWith(corrector);
		} else {
			var subCorrector = 28 - corrector - visLetters;
			if (subCorrector >= 0) {
				corrector += subCorrector;
				alphabetWith(corrector);
			}
		}
	});

	$('body').on('click', '.alphabet__btn--prev', function(event) {
		if (corrector >= 4) {
			corrector -= 4;
			alphabetWith(corrector);
		}
	});
});