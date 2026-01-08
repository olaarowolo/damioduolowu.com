// Hamburger menu logic
window.addEventListener('DOMContentLoaded', function() {
  var card = document.querySelector('.card');
  if (card) card.classList.add('loaded');

  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.display = 'flex';
      } else {
        mobileMenu.style.display = 'none';
      }
    });
  }
});

function closeMobileMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    mobileMenu.style.display = 'none';
  }
}
