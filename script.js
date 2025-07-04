// Loading screen functionality
var loadingScreen = document.querySelector(".loadingscreen");
window.addEventListener('load', function () {
  loadingScreen.style.display = 'none';
})

// Theme toggle functionality

// Hide navbar on scroll
var prevScrollPos = window.scrollY;

// Show button to scroll to top when user scrolls down x amount
let mybutton = document.getElementById("scrolltotop");

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  // Navbar hide/show functionality
  var mobileMenuOpen = document.getElementById("mobile-menu-toggle").checked;

  // Don't hide navbar if mobile menu is open
  if (mobileMenuOpen) {
    document.getElementById("navbar").style.top = "0";
  }
  // Otherwise, handle normal scroll behavior
  else if (currentScrollPos > prevScrollPos && currentScrollPos > 0) {
    document.getElementById("navbar").style.top = "-55px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
  prevScrollPos = currentScrollPos;

  // Scroll to top button functionality
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Show element on load
window.onload = function () {
  document.getElementById("theme-toggle").style.display = "block";
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy code to webshop
function webshopCode() {
  navigator.clipboard.writeText('IngåScouter2022');
  alert("Klistra in koden som kopierades på följande sida för att komma åt webshoppen");
}
