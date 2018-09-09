$(document).ready(function(){
/////////////////////////////////////////////////////
  $(document).on('touchend', '.nav-mob-humburger', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open')
      $('.nav-mob').removeClass('open')
      $('.header').removeClass('open')
      $('body').removeClass('hidden')
    }else{
      $('body').addClass('hidden')
      $(this).addClass('open')
      $('.nav-mob').addClass('open')
      $('.header').addClass('open')
    }
  });
})
  $(document).on('click', '.js-login', function(e){
    e.preventDefault()
    $('.js-modal-login').addClass('show')
  })
    $(document).on('click', '.js-create', function(e){
    e.preventDefault()
    $('.js-modal-reg').addClass('show')
  })
    $(document).on('click', '.modal-back', function(e){
    $('.modal-wrap').removeClass('show')
  })
////////////////////////////////////////////////////