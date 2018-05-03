


$(function() {
   $('.slider').owlCarousel({
    loop:true,
    nav:true,
    navText: ['<i class="fas fa-chevron-left" style="font-size:20px; color = #fff; opacity = .5 "></i>', '<i class="fas fa-chevron-right" style="font-size:20px;color = #fff; opacity = .5"></i>'],
    dots: false,
    dataDots: false,
    items: 1,
})
});



$(function() {
   $('.header__slider').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
})
});
$(function(){
    $('.slider__header').owlCarousel({
    loop:true,
    margin:10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,

})
});


$(function(){
    $('.header__absolute__lay__btn').on('click', function(e){
        e.preventDefault()
            $('.freeB').css('display', 'block')
       if($('.freeB').css('display') === 'none'){
        $(this).removeAttr('style')
    }
});
        $('.workL a').on('click', function(e){
        e.preventDefault()
            $('.workB').css('display', 'block')
       if($('.workB').css('display') === 'none'){
        $(this).removeAttr('style')
    }
});
                $('.priceL a').on('click', function(e){
        e.preventDefault()
            $('.priceB').css('display', 'block')
       if($('.priceB').css('display') === 'none'){
        $(this).removeAttr('style')
    }
});
                    $('.footerL a').on('click', function(e){
        e.preventDefault()
            $('.footerB').css('display', 'block')
       if($('.footerB').css('display') === 'none'){
        $(this).removeAttr('style')
    }
});
});
$(function(){
    $('.header__absolute__popup__close').on('click', function(e){
    	 e.preventDefault()
        $('.header__absolute__popup__lay').css('display', 'none')
    })
});