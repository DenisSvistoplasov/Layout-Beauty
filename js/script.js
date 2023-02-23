(() => {

  const qualitySlider = new Swiper('.quality-slider', {
    loop: true,
    autoHeight: false,

    // Navigation arrows
    navigation: {
      nextEl: '.quality-slider__button_next',
      prevEl: '.quality-slider__button_prev',
    },
    
    // Pagination
    breakpoints: {
      320: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
      680: {
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function(_, i) {
            return (i + '').length == 1 ? '0' + i : i;
          }
        },
      },
    }
  });
  
})();