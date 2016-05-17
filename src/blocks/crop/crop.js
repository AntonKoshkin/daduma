function popupResult(result) {
	var html;
	if (result.html) {
		html = result.html;
	}
	if (result.src) {
		html = '<img src=\'' + result.src + '\' />';
	}

	$.ajax({
		type		: 'GET',
		url		: 'path/to/php_file',
		data		: {
			select1	: html
		},
		error		: console.log('error'),
		success	: console.log('success'),
	});
	
	// location.reload();
}

function cropUpload() {
	var $uploadCrop;

	function readFile(input) {
		if (input.files && input.files[0]) {
			var
				reader	=	new FileReader(),
				fileSize	=	input
									.files[0]
									.size,
				exp		=	input
									.files[0]
									.name
									.split('.')[1]
									.toLowerCase();

			reader.onload = function(e) {
				$uploadCrop.croppie('bind', {
					url			: e.target.result,
					orientation	: 1,
				});
				$('#uploadPhoto').removeClass('modal--show');
				$('#crop').addClass('modal--show');
				$('html').addClass('no-scroll');
			};

			$('#uploadPhoto').addClass('modal--show');

			if (!(exp === 'jpg' || exp === 'jpeg' || exp === 'png')) {
				$('#uploadPhoto').removeClass('modal--show');
				$('#wrongFile').addClass('modal--show');

			} else if (fileSize > 5242880) {
				$('#uploadPhoto').removeClass('modal--show');
				$('#tooBigFile').addClass('modal--show');

			} else {
				reader.readAsDataURL(input.files[0]);
				document
					.querySelector('.upload-btn--profile')
					.innerHTML	=	document.querySelector('.upload-btn--profile').innerHTML;
			}
		}
	}

	$uploadCrop = $('.crop__area').croppie({
		enableOrientation	: true,
		exif					: true,
		boundary				: {
			width		: $('.crop__area').width(),
			height	: $('.crop__area').width(),
		},
		viewport				: {
			width		: 265,
			height	: 265,
		},
	});

	$('body').on('change', '#upload', function() {
		readFile(this);
	});

	$('body').on('click', '#uploadCrop', function(ev) {

		$uploadCrop
			.croppie('result', {
				type: 'canvas',
				size: 'viewport',
			})
			.then(function(resp) {
				popupResult({
					src: resp,
				});
			});
	});

	$('body').on('click', '.crop__rotate', function(event) {
		$uploadCrop
			.croppie('rotate', parseInt($(this).data('rotate')));
	});
}

jQuery(document).ready(function($) {
	cropUpload();
});