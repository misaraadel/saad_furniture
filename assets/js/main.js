$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  $('.add-to-cart').on('click', function () {
    var cart = $('.cart-icon');
    var imgtodrag = $(this).closest('.product-box').find("img").first();
    if (imgtodrag) {
    var imgclone = imgtodrag.clone()
      .offset({
      top: imgtodrag.offset().top ,
      left: imgtodrag.offset().left
    })
      .css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'border-radius': '50%',
      'z-index': '9999'
    })
    .appendTo($('body'))
      .animate({
      'top': cart.offset().top + 10,
      'left': cart.offset().left + 10,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');
    
    setTimeout(function () {
      cart.effect("bounce", {
        times: 1
      }, 200);
    }, 1500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function () {
      $(this).detach()
    });
    }
  });

  $(".fav-icon").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  $(".drop-list-data").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  $(".show-pass").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".swiper-products", {
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
      slidesPerView: 1,
      spaceBetween: 18,
      },
      768: {
      slidesPerView: 1,
      spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
    spaceBetween: 10,
    
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0:{
        slidesPerView: 3,
      },
      700:{
        slidesPerView: 3,
      },
      1050:{
        slidesPerView: 4,
      }
    }
  });
  var swiper2 = new Swiper(".prodcutDetailsSwiper", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });

  $(".show_hide_password .show-pass").on('click', function(event) {
    event.preventDefault();
    if($(this).siblings("input").attr("type") == "text"){
      $(this).siblings("input").attr('type', 'password');
    }else if($(this).siblings("input").attr("type") == "password"){
      $(this).siblings("input").attr('type', 'text');
    }
  });
  
  $("#single-slider-range").slider({
    range:true,
    orientation:"horizontal",
    min: 0,
    isRTL: true,
    max: 10000,
    values: [0, 10000],
    step: 100,
    slide:function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }     
      $("#single_min_price").val(ui.values[0]);
      $("#single_max_price").val(ui.values[1]);
    }
  });
});