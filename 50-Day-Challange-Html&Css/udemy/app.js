function openNav(){
      document.getElementById("sideMenu").style.width = "50%";
      document.querySelector(".closebtn").style.display = "block";

}
function closeNav(){
      document.getElementById("sideMenu").style.width = "0";
      document.querySelector(".closebtn").style.display = "none";
}

$(document).ready(function(){
      $('.learningSlider').slick({
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: ".prev-btn",
            nextArrow: ".next-btn",
            responsive: [
                  {
                        breakpoint: 800,
                        settings: {
                           slidesToShow: 2,
                        }
                     },
                     {
                        breakpoint: 500,
                        settings: {
                           slidesToShow: 1,
                        }
                     },
                  
               ]

      });
});



