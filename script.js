// Hide navbar on scroll
var prevScrollpos = window.scrollY;

// Show button to scroll to top when user scrolls down x amount
let mybutton = document.getElementById("scrolltotop");

window.onscroll = function() {
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}