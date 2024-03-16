
// Get button
let topButton = document.getElementById("goTopButton");

// When user scrolls down 20px from top of document, show button
window.addEventListener('scroll', scrollTopFunction);

function scrollTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When user clicks on button, scroll to top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}