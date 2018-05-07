$(window).scroll(function() {
	var st = $(this).scrollTop()
	$('.header img').css({
		"transform" : "translate(0%, -"+ st/25 +"%"
	})
	$('.header__text').css({
	"transform" : "translate(0%, "+ st*1.5 +"%"
	})
	if(st >= $('.works').offset().top - 300){
		$('.works__items__item').each(function(i){
			setTimeout(function(){
				$('.works__items__item').eq(i).addClass('works__items__item__isShowing')
			}, 200 * (i+1))
		})
	}
		if($('.header').offset().top - st === 0 || $('.header').offset().top - st > -150 ){
		$('.nav__menu__list__link').removeClass('nav__menu__list__link__active')
		$('.home_l').addClass('nav__menu__list__link__active')
	}
		if( $('.about').offset().top - st <= 0 && $('.works').offset().top - st > 0 ){
		$('.nav__menu__list__link').removeClass('nav__menu__list__link__active')
		$('.about_l').addClass('nav__menu__list__link__active')
	} 
			if(($('.works').offset().top - st) <= 0){
		$('.nav__menu__list__link').removeClass('nav__menu__list__link__active')
		$('.works_l').addClass('nav__menu__list__link__active')
	} 
				if(($('.contact').offset().top - st) < 550 ){
		$('.nav__menu__list__link').removeClass('nav__menu__list__link__active')
		$('.contact_l').addClass('nav__menu__list__link__active')
	} 
});
$(document).ready(function(){
		if($('.header').offset().top - $(window).scrollTop() === 0){
		$('.home_l').addClass('nav__menu__list__link__active')
	}
})
$(document).ready(function(){
    $('.nav__menu__list__link').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});