$(document).ready(function(){
    $('.clients-logo-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
          $(".header").addClass("active");
        }
        else {
          $(".header").removeClass("active");
        }
      });
})