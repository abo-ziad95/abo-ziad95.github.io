$(document).ready(function () {
  $('.section').click(function(){
    $('.burger-wrap').css('transition-delay', '0s')
    $('.menu-wrap').removeClass('active')
    $('.burger-wrap').removeClass('active')
  })
  $('.burger-wrap').click(function () {
    if($('.burger-wrap').hasClass('active')){
      $('.burger-wrap').css('transition-delay', '0s')
    }else{
      $('.burger-wrap').css('transition-delay', '.2s')
    }
    $('.menu-wrap').toggleClass('active')
    $('.burger-wrap').toggleClass('active')
    $('.header-logo').toggleClass('margin')
  });
  $('.menu-lag-item').click(function () {
    let position = $(this).data('position')
    $('.line').css('left', position)
  })
  $('.menu-list-item').click(function(e){
    e.preventDefault()
    let anchor = $(this).data('anchor')
    $('html, body').animate({scrollTop: $(anchor).offset().top}, 500)
    $('.menu-wrap').removeClass('active')
    $('.burger-wrap').removeClass('active')
    $('.header-logo').removeClass('margin')

  });
  // $('#btn').click(function(e){
  //   e.preventDefault()
  //   let anchor = $(this).data('anchor')
  //   $('html, body').animate({scrollTop: $(anchor).offset().top}, 500)
  //   $('html').css('overflow','')
  // });
  // $('.menu-mobil-item').click(function(e){
  //   e.preventDefault()
  //   let anchor = $(this).data('anchor')
  //   $('.menu-mobil-wrapper').toggleClass('active')
  //   $('.menu-mobile-wrap').toggleClass('fixed')
  //   $('html').css('overflow','')
  //   $('html, body').animate({scrollTop: $(anchor).offset().top}, 500)
  // })
  // var stickyTop = $('.action').offset().top;
  //
  // $(window).on( 'scroll', function(){
  //   if ($(window).scrollTop() >= stickyTop) {
  //     $('.menu-wrapper').addClass('bg');
  //   } else {
  //     $('.menu-wrapper').removeClass('bg');
  //   }
  // });
  // $('#fullpage').fullpage({
  //   //options here
  //   autoScrolling:true,
  //   fixedElements: '.header',
  //   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  //   scrollHorizontally: true,
  //   responsiveWidth: 1024,
  //   anchors:['first', 'second', 'three', 'four', 'five'],
  //   normalScrollElements: '.slider',
  // });
});
document.getElementById('slider').addEventListener("wheel", myFunction)
function myFunction(e) {
  let translate  = $('.slider-wrap').css('transform').split(',')[4];
  let number = Number(translate);
  if($(window).outerWidth() > 1024){
    e.preventDefault();
    if($(window).outerWidth() > 1200){
      if (e.deltaY > 0) {
        if(number < -950){
          return
          e.preventDefault();
        }
        number -= 10;
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      } else
      {
        number += 10;
        console.log(number)
        if(number > 0){
          return
          e.preventDefault();
        }
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      }
    }else if($(window).outerWidth() > 1024){
      if (e.deltaY > 0) {
        if(number < -1150){
          return
          e.preventDefault();
        }
        number -= 10;
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      } else
      {
        number += 10;
        console.log(number)
        if(number > 0){
          return
          e.preventDefault();
        }
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      }
    }else if($(window).outerWidth() > 768) {
      if (e.deltaY > 0) {
        if(number < -1350){
          return;
          e.preventDefault();
        }
        number -= 10;
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      } else
      {
        number += 10;
        console.log(number)
        if(number > 0){
          return;
          e.preventDefault();
        }
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      }
    }else if ($(window).outerWidth() > 567){
      if (e.deltaY > 0) {
        if(number < -1550){
          return;
          e.preventDefault();
        }
        number -= 10;
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      } else
      {
        number += 10;
        console.log(number)
        if(number > 0){
          return;
          e.preventDefault();
        }
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      }
    }
    else if ($(window).outerWidth() < 567){
      if (e.deltaY > 0) {
        if(number < -1760){
          return;
          e.preventDefault();
        }
        number -= 10;
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      } else
      {
        number += 10;
        console.log(number)
        if(number > 0){
          return;
          e.preventDefault();
        }
        $('.slider-wrap').css('transform', `translateX(${number}px)`)
      }
    }else{
      return
    }
  }
}
