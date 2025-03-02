// Initialize AOS for scroll animations
AOS.init({
 duration: 800, // Animation duration in ms
 once: true, // Only animate once
});

// Hide navbar completely on scroll down and show on scroll up for all devices
let lastScrollTop = 0;
const navbar = document.querySelector('.modern-navbar');

window.addEventListener('scroll', function () {
 let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
 if (currentScroll > lastScrollTop && currentScroll > 50) {
  // Scrolling down: hide the navbar completely
  navbar.style.top = `-${navbar.offsetHeight}px`;
 } else {
  // Scrolling up: show the navbar
  navbar.style.top = '0';
 }
 lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
