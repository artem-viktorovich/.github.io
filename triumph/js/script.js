$(window).keyup(function (e) {
	var target = $('.checkbox-other input:focus');
	if (e.keyCode == 9 && $(target).length) {
		$(target).parent().addClass('focused');
	}
});

$('.checkbox-other input').focusout(function () {
	$(this).parent().removeClass('focused');
});

$(document).ready(function () {
	$('.next').on('click', function () {
		if ($('.inp1').val().length > 0) {
			$('.consultation').fadeOut(300, function () {
				$('.cviz_1').fadeIn(300);
			});
		}
	});
});
