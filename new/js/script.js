$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.menu__icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

