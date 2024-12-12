var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar"); // Targeting by class
var navbarHeight = navbar.offsetHeight; // Get the height of the navbar

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0"; // Show navbar
    } else {
        navbar.style.top = `-${navbarHeight}px`; // Hide navbar based on its height
    }
    prevScrollpos = currentScrollPos;
}