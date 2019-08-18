//изменение отдельный компонентов при нажатии кнопки
var btn = document.getElementById('btn')
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.title');
	text.classList.add ('color')
	var text = document.querySelector('span');
	text.classList.add ('red')


}
// Плавная появление анимации при прокрутке страницы 1-го блока
$(function () {
	$(window).scroll(function() {
	    $('#lessons .container').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});//второй блок
	$(window).scroll(function() {
	    $('#mail .container').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInUp");
	        }
	    });
	});
})