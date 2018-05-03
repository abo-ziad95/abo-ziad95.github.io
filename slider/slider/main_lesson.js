;(function(){
    var images = ['1.jpg', '2.jpg', '3.jpg'];
    var currentImg = 0;
    __self = this
    function currentImgPlus(){
      if(currentImg === 3){
        currentImg = 0
        console.log(currentImg)
        return
      }else {
        currentImg += 1
        console.log(currentImg)
        return
      }
    };

    $('.slider__container').css('background-image', 'url(img/'+images[currentImg]+')');

    for (var i = 0; i < images.length; i++) {
        $('.slider__controls').append('<div data-img="'+i+'" class="slider__btn">');
    }

    $('.slider__btn[data-img="'+currentImg+'"]').addClass('slider__btn--active');

    $('.slider__btn').click(function(){
        currentImg = $(this).attr('data-img');
        $('.slider__container').css('background-image', 'url(img/'+images[currentImg]+')');
        $('.slider__btn').removeClass('slider__btn--active');
        $(this).addClass('slider__btn--active');
    })

}());
