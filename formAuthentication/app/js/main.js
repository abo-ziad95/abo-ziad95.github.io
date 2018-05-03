var form = document.querySelector('.auth__content__layout__form--form')
var login = form.querySelector('.auth__content__layout__form--login')
var pass = form.querySelector('.auth__content__layout__form--pass')
function resetError(e){
  $(e).removeAttr('style')
  $(e).parent().removeAttr('style')
}
function showLogin(){
  if(sessionStorage.login){
    // $('.auth__message').css('display', 'block').html('hello '+sessionStorage.login)
    $('.auth__message').css('display', 'block').append('<div class="auth__message--text">hello '+sessionStorage.login+'</div>')
  }
}
form.addEventListener('submit', function(e){
  e.preventDefault()
  resetError(login)
  var loginValid = true
  if (!login.value){
    $(login).css('border-color', 'red')
    $(login).parent().css('color', 'red')
    loginValid = false
    return
  }
  resetError(pass)
  var passValid = true
  if (!pass.value){
    $(pass).css('border-color', 'red')
    $(pass).parent().css('color', 'red')
    passValid = false
    return
  }
  if (passValid === true || loginValid === true){
      sessionStorage.login = login.value;
      showLogin()
  }

})
window.onload = showLogin()
