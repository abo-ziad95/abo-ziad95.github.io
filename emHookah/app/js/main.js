$(document).ready(function () {
  $('.header-btn, .scroll-btn, .scroll').click(function(e){
    e.preventDefault()
    let anchor = $(this).data('anchor')
    $('html, body').animate({scrollTop: $(anchor).offset().top}, 500)
  });
})
