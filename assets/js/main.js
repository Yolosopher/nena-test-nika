// scrollbar
var swiper = new Swiper('.whole-slider-outer', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// gallery
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 11,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  }
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1500,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
});





$(document).ready(function () {
  $('.each-ingr').mouseover(function () {
    $(this).css('bottom', '30px');
    $(this).next().css('bottom', '10px');
    $(this).prev().css('bottom', '10px');
  })
  $('.each-ingr').mouseleave(function () {
    $(this).css('bottom', '0');
    $(this).next().css('bottom', '0');
    $(this).prev().css('bottom', '0');
  })


  $('.each-selecting-box').click(function () {
    $('.each-selecting-box').removeClass('chosen');
    $(this).addClass('chosen');
    let src = $(this).find('img').attr('src');

    let mainChsnPhoto = $(this).parent().parent().parent().find('.main-chosen-photo img');
    mainChsnPhoto.fadeOut(400, function () {
      $(this).attr('src', src).fadeIn(400)
    });

  })

  // POPULAR PRODUCTS
  $('.pp-each-box-li').mouseover(function () {
    $(this).addClass('each-box-li-active');
  });
});
$('.pp-each-box-li').mouseleave(function () {
  $(this).removeClass('each-box-li-active');
  $(this).addClass('each-box-li-active-remove');
  setTimeout(() => {
    $(this).removeClass('each-box-li-active-remove');
  }, 900);
});
