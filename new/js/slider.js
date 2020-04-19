$(document).ready(function(){
	$('.slider').slick({
		
	});
		$('.portfolio-big').slick({
		cssEase: 'ease',
		adaptiveHeight: true,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-small',
	});
		$('.portfolio-small').slick({
		arrows: true,
		easeng: 'ease-out',
		slidesToShow: 3,
		adaptiveHeight: true,
		speed: 400,
		initialSlide: 0,
		touchMove: false,
		waitForAnimate: false,
		centerMode: true,
		// variebleWidth: true
		asNavFor: '.portfolio-big',
		responsive:[
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 540,
				settings:{
					slidesToShow: 1,
					arrows: false,

				}
			}
		],
		mobileFirst: false
	});

});
