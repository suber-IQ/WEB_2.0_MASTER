$(document).ready(function(){
      $('.slider').slick({
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: ".prev-btn",
            nextArrow: ".next-btn",
            responsive: [
                  {
                     breakpoint: 1220,
                     settings: {
                        slidesToShow: 4,
                     }
                  },
                  {
                     breakpoint: 720,
                     settings: {
                        slidesToShow: 3,
                     }
                  },
                  
               ]

      });
});
$(document).ready(function(){
      $('.secondSlider').slick({
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: ".prev-second-btn",
            nextArrow: ".next-second-btn",
            responsive: [
                  {
                     breakpoint: 1220,
                     settings: {
                        slidesToShow: 4,
                     }
                  },
                  {
                     breakpoint: 720,
                     settings: {
                        slidesToShow: 3,
                     }
                  },
                  
               ]

      });
});