$(document).ready(function() {
      $('.banner-slider').slick({
            dots: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 1,
            prevArrow: '.prev',
            nextArrow: '.next',
      });
   
   });


document.getElementById('main').addEventListener('click', closeNav);

function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
  document.getElementById("main").style.marginLeft = "60%";
  document.getElementById("main").style.display = "block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.display = "none";

}


// Get the search bar element
const stickySearch = document.getElementById('stickySearch');

// Get the offset position of the search bar
const stickyOffset = stickySearch.offsetTop;

// Function to add/remove sticky class based on scroll position
function stickySearchBar() {
  if (window.pageYOffset > stickyOffset) {
    stickySearch.classList.add('sticky');
  } else {
    stickySearch.classList.remove('sticky');
  }
}

// Event listener for scroll
window.onscroll = function() {
  stickySearchBar();
};
