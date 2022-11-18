const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
  $('.mobile-nav ul li a').on('click', () => {
    $('#onclick').click();
  });
});
