// Darkmode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#theme-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the root
  document.documentElement.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the root
  document.documentElement.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', 'disabled');
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not currently enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off  
  } else {
    disableDarkMode();
  }
});


// Hide navbar on scroll
var prevScrollpos = window.scrollY;

// Show button to scroll to top when user scrolls down x amount
let mybutton = document.getElementById("scrolltotop");

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  // Navbar hide/show functionality
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;

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