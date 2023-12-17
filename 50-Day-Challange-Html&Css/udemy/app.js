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
       prevArrow: ".prev-learning",
       nextArrow: ".next-learning",
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
$(document).ready(function() {
    $('.item-slider').slick({
       autoplay: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: ".prev-item-icon",
       nextArrow: ".next-item-icon",
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
 
 });
$(document).ready(function() {
    $('.popular-slider').slick({
       autoplay: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: ".popular-prev",
       nextArrow: ".pupular-next",
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
 
 });
$(document).ready(function() {
    $('.featured-slider').slick({
       autoplay: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow: ".featured-prev",
       nextArrow: ".featured-next",
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
 
 });
