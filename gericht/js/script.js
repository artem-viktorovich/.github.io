const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__block');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


    const input = document.querySelector('.form__item[type="time"]');
    const icon = input.previousElementSibling;
    
    icon.addEventListener('click', () => {
      input.click();
    });
    