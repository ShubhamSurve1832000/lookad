$(document).ready(function(){

  // Header Background Color Change on Scroll
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
      $(".header").addClass("active");
    }
    else {
      $(".header").removeClass("active");
    }
  });

  // Hamburger Menu
  var headerH = $(".header").outerHeight()

  $(document).on("click", ".menu-btn", function(){
    $(this).toggleClass("active")
    $(".header .navbar-links").toggleClass("active")
    $(".header .navbar-links").css('top' , headerH)
  })

  // Clients Logo Slider
  $('.clients-logo-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
  });

})