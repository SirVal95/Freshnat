// FOR THE MOBILE VIEW OF TH NAVIGATION BAR

const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".menu");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
}))


window.addEventListener('mouseup', function(e){
  var menu = document.getElementById('menu');
  if(e.target !== menu && e.target !== menu_btn){
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
  }
})


// Get the button for scroll to top and the div for nav-bar:
let mybutton = document.getElementById("myBtn");
let navBar = document.getElementById("nav-bar");

// When the user scrolls down 80px from the top of the document, show the button and the nav-bar background
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
    navBar.style.background = "#F0FFF7"; //Nav-bar background 
  } else {
    mybutton.style.display = "none";
    navBar.style.background = "transparent";
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// PRELOADER

// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//   loader.style.display = "none";
// });


// scroll reveal

// ScrollReveal({
//   reset: true,
//   distance:'20px',
//   delay: 60,
//   duration: 1500
// });


// ScrollReveal().reveal('.fresh-and-natural-1, .freshest, .the-box, .the-blog-box', { delay: 50, origin: 'bottom', interval: 100 });
// ScrollReveal().reveal('.vegetable, .buy-your-craving', { delay: 50, origin: 'top', interval: 100 });

