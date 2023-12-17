function openNav(){
      document.getElementById("sideMenu").style.width = "50%";
      document.querySelector(".closebtn").style.display = "block";

}
function closeNav(){
      document.getElementById("sideMenu").style.width = "0";
      document.querySelector(".closebtn").style.display = "none";
}
$(document).ready(function() {
    $('.learning-row').slick({
       autoplay: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: ".prev",
       nextArrow: ".next",
       responsive: [
          {
             breakpoint: 992,
             settings: {
                slidesToShow: 2,
             }
          },
          {
             breakpoint: 768,
             settings: {
                slidesToShow: 1,
             }
          }
       ]
    });
 
    // $('.nav-trigger').click(function() {
    //    $('.site-content-wrapper').toggleClass('scaled');
    // })
 
 });
