// Hamburger menu toggle
(function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu  = document.getElementById('closeMenu');
  if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (closeMenu)  closeMenu.addEventListener('click',  () => mobileMenu.classList.remove('open'));
})();

// Contact form handler
function handleContactForm(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
  return false;
}

// Scroll-triggered animations
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.info-card, .contact-form-wrap').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    observer.observe(el);
  });
})();
