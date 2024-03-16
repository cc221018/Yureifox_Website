
// when scrolling, execute function
window.addEventListener('scroll', stickyNav);

// get navbar
var navbar = document.getElementById("navbarBox");

// get offset position of the navbar
var sticky = navbar.offsetTop;

// add sticky class navbar when reaching scroll position / remove "sticky" when leaving scroll position
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}