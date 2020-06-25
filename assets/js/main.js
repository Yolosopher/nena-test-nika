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

  // SELECTING BOXES
  selectingBoxes('each-selecting-box', 'main-chosen-photo')

  function selectingBoxes(each, main) {
    $(`.${each}`).click(function () {
      $(`.${each}`).removeClass('chosen');
      $(this).addClass('chosen');
      let src = $(this).find('img').attr('src');
  
      let mainChsnPhoto = $(this).parent().parent().parent().find(`.${main} img`);
      mainChsnPhoto.fadeOut(400, function () {
        $(this).attr('src', src).fadeIn(400)
      });
    })
  }


  // POPULAR PRODUCTS
  $('.pp-each-box-li').mouseover(function () {
    $(this).addClass('each-box-li-active');
  });
  $('.pp-each-box-li').mouseleave(function () {
    $(this).removeClass('each-box-li-active');
    $(this).addClass('each-box-li-active-remove');
    setTimeout(() => {
      $(this).removeClass('each-box-li-active-remove');
    }, 900);
  });


  // POPULAR PRODUCTS AUTOPLAY
  let ppLis = document.querySelectorAll('.pp-each-box-li');
  let currentLi = 0;
  autoPlay();
  setInterval(()=>{
    autoPlay();
  }, 6000);

  function autoPlay() {
    if ((currentLi-1) != -1) {
      ppLis[currentLi-1].classList.remove('each-box-li-selected');
    }
    ppLis[currentLi].classList.add('each-box-li-selected');
    currentLi++;
    let a = currentLi;
    if (a === ppLis.length) {
      currentLi = 0;
    };
    srcChanger();
  };

  function srcChanger() {
    if ($('.pp-each-box-li').hasClass('each-box-li-selected')) {
      let src = $('.each-box-li-selected a img').attr('src');

      $('.pp-main-box img').fadeOut(400, function() {
        $(this).attr('src', src).fadeIn(400)
      });
    }
  }
});
