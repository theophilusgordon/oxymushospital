// Background color for navigation on scroll
window.addEventListener("scroll", function(){
  const scrolledNav = document.querySelector("header");
  scrolledNav.classList.toggle("navscrolled", window.scrollY > 0);
});

// Drop down menu
const navBar = document.querySelector(".fa-bars");

navBar.addEventListener("click", function(){
  navBar.classList.toggle("fa-times");
  const menu = document.querySelector(".nav-items");
  menu.classList.toggle("menu");
});

// Typing animation
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('We provide and manage comprehensive and accessible health service with special emphasis on primary health care to our clients')
  .start();