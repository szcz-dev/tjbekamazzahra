// Initialize AOS for scroll animations
AOS.init({
 duration: 800, // Animation duration in ms
 once: true, // Only animate once
});

// Hide navbar completely on scroll down and show on scroll up for all devices
const navbar = document.querySelector('.modern-navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    // At the very top, show the navbar
    navbar.style.top = '0';
  } else {
    // Scrolled down, hide the navbar by moving it up out of view
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }
});

