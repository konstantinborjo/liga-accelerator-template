new Swiper('.swiper', {
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
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
      spaceBetween: 30

    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
})

new Swiper('.comment__swiper', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});
