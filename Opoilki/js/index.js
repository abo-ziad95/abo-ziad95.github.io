$(function(){
  $('.nav__menu__humburger').on('click', function(){
    $(this).toggleClass('nav__menu__humburger__open')
    $('.nav__menu__list').slideToggle(700, function(){
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style')
      }
    })
  })

})
function initMap(){
  var elem = document.getElementById('map')
  var opstion = {
    zoom: 14,
    center: {lat: 50.447593, lng: 30.492485}
  }

  var myMap = new google.maps.Map(elem, opstion)
  var marker = new google.maps.Marker({
    position: {lat: 50.447593, lng: 30.492485},
    map: myMap
  });
  var infowindow = new google.maps.InfoWindow({
     content: 'hello'
   })
   marker.addListener('click', function() {
     infowindow.open(map, marker);
   });
}
