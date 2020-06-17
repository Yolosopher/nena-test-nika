var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
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
          spaceBetween: 10,
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
    $('.each-ingr').hover(function() {
        $(this).slideUp(500);
    }, function() {
        $(this).slideDown(500);
    }
    );};