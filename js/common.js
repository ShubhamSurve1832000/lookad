$(document).ready(function () {

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

  // Enquiry Form
  $(document).ready(function () {
    $(".enquire-now-btn , .close , .overlay").click(function () {
      $('.contact-form-box , .overlay').toggleClass("active");
    });
  });

  // Hamburger Menu
  var headerH = $(".header").outerHeight()

  $(document).on("click", ".menu-btn", function () {
    $(this).toggleClass("active")
    $(".header .navbar-links").toggleClass("active")
    $(".header .navbar-links").css('top', headerH)
  })

  $(document).on('click', '[data-tab]', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var dataTab = $(this).attr('data-tab');
    $('#' + dataTab).siblings().removeClass("active");
    $('#' + dataTab).addClass('active');
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

  // Newspaper Advertisement Slider, Outdoor Advertisement Slider, Digital Advertisement Slider
  $('.newspaper-advertisement-slider, .outdoor-advertisement-slider, .digital-advertisement-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
    ]
  });

  // Television Advertisement Slider
  $('.television-advertisement-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });

  // About Us Review Slider
  $('.reviews-content-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });

  // About Us Review Slider
  $('.our-team-media-slider-section').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // About Us Client Logos  Slider
  
  $('.about-us-client-logos').slick({
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 6,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
        }
      },
    ]
  });
})