function tabHeight (argument) {
	
}

jQuery(document).ready(function($) {
	$('body').on('click', '.about-act__cont-title:not(.about-act__cont-title--btn)', function(event) {
		event.preventDefault();

		var
			contContent	=	$(this).next('.about-act__cont-content'),
			innerHeight	=	contContent
									.find('.about-act__inner')
									.outerHeight();
			contPos		= $(this).offset().top - $('header').outerHeight();

		console.log(contPos);

		if (contContent.height() === 0) {
			contContent
				.animate({'height': innerHeight}, 300);

			$('html, body').animate({scrollTop: contPos}, 300);
		} else {
			contContent.animate({'height': 0}, 300);
		}
	});
});