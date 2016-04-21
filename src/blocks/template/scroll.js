$("a[href^='#']").on('click', function(e){
	var
		point			= $(this).attr('href'),
		scrollTime	= $(point).offset().top / 3;
	$('html,body').stop().animate({scrollTop: $(point).offset().top}, scrollTime);
	e.preventDefault();
});