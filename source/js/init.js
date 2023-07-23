new Swiper('.swiper', {
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
