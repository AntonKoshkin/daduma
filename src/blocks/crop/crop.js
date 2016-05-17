function demoUpload() {
	var $uploadCrop;

	function readFile(input) {
		if (input.files && input.files[0]) {
			var
				reader	=	new FileReader(),
				exp		=	input
									.files[0]
									.name
									.split('.')[1]
									.toLowerCase();

			reader.onload = function(e) {
				$uploadCrop.croppie('bind', {
					url: e.target.result
				});
				// $('.upload-demo').addClass('ready');
				$('#uploadPhoto').removeClass('modal--show');
				$('#crop').addClass('modal--show');
				$('html').addClass('no-scroll');
			};

			$('#uploadPhoto').addClass('modal--show');

			if(exp === 'jpg' || exp === 'jpeg' || exp === 'png') {
				reader.readAsDataURL(input.files[0]);
				document
					.querySelector('.upload-btn--profile')
					.innerHTML	=	document.querySelector('.upload-btn--profile').innerHTML;
			} else {
				$('#uploadPhoto').removeClass('modal--show');
				$('#wrongFile').addClass('modal--show');
			}
		}
	}

	$uploadCrop = $('.crop__area').croppie({
		viewport	: {
			width		: 265,
			height	: 265,
		},
		boundary	: {
			width		: $('.crop__area').width(),
			height	: $('.crop__area').width(),
		},
		exif: true,
	});

	$('body').on('change', '#upload', function() {
		readFile(this);
	});

	$('.body').on('click', '#uploadCrop input', function (ev) {
		ev.preventDefault();

		$uploadCrop
			.croppie('result', {
				type: 'canvas',
				size: 'viewport',
			})
			.then(function(resp) {
				popupResult({
					src: resp,
				});
				// слать тут
			});
	});
}


jQuery(document).ready(function($) {
	demoUpload();


});