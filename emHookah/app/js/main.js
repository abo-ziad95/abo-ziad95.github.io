$(document).ready(function () {
  $('.header-btn, .scroll-btn, .scroll').click(function(e){
    e.preventDefault()
    $('.mob-humburger-wrap').removeClass('mob-humburger-wrap__open')
    $('.mob-menu-wrap').removeClass('mob-menu-wrap__open')
    $('body, html').css('overflow-x', '')
    let anchor = $(this).data('anchor')
    $('#line').removeClass('fixed')
    $('html, body').animate({scrollTop: $(anchor).offset().top}, 500)
  });
  $(document).on("scroll", function(e) {
    if($(document).scrollTop() > 0) {
      $('#line').removeClass('fixed')
    } else{
      $('#line').addClass('fixed')
    }
  });
  $('.mob-humburger-wrap').click(() => {
    if($('.mob-humburger-wrap').hasClass('mob-humburger-wrap__open')){
      $('.mob-humburger-wrap').removeClass('mob-humburger-wrap__open')
      $('.mob-menu-wrap').removeClass('mob-menu-wrap__open')
      $('body, html').css('overflow-x', '')
    }else{
      $('.mob-humburger-wrap').addClass('mob-humburger-wrap__open')
      $('.mob-menu-wrap').addClass('mob-menu-wrap__open')
      $('body, html').css('overflow-x', 'hidden')
    }
  })
})
