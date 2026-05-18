/* ============================================
   Being sevak PROJECT - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // MOBILE MENU
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) && e.target !== hamburger) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // HERO SLIDER
  // ============================================
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let currentSlide = 0;
  let autoplayTimer = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); resetAutoplay(); });
  });

  // Touch/swipe support
  let touchStartX = 0;
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    slider.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
        resetAutoplay();
      }
    });
  }

  startAutoplay();

  // ============================================
  // PRESET AMOUNT BUTTONS
  // ============================================
  const presetBtns = document.querySelectorAll('.preset-amt');
  const amountInput = document.querySelector('.amount-input');

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Extract numeric value
      const numStr = btn.textContent.replace(/[^\d]/g, '');
      if (amountInput) amountInput.value = numStr;
    });
  });

  if (amountInput) {
    amountInput.addEventListener('input', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
    });
  }

  // ============================================
  // ANIMATED STATS COUNTER
  // ============================================
  function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M+';
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K+';
    return n.toLocaleString() + '+';
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(eased * target);
      el.textContent = formatNumber(current);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statNums = document.querySelectorAll('.stat-num[data-target]');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNums.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.3 });

  const impactSection = document.querySelector('.impact-section');
  if (impactSection) statsObserver.observe(impactSection);

  // ============================================
  // PROGRESS BARS ANIMATION
  // ============================================
  const progressFills = document.querySelectorAll('.progress-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => { fill.style.width = width; }, 100);
        progressObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  progressFills.forEach(fill => {
    const originalWidth = fill.style.width;
    fill.style.width = '0';
    fill.style.transition = 'width 1.2s ease';
    fill.setAttribute('data-width', originalWidth);
    progressObserver.observe(fill);
  });

  // ============================================
  // STICKY NAVBAR SHADOW
  // ============================================
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
    }
  });

  // ============================================
  // QUICK DONATE BUTTON
  // ============================================
  const qdBtn = document.querySelector('.quick-donate-btn');
  if (qdBtn) {
    qdBtn.addEventListener('click', () => {
      const amt = amountInput ? amountInput.value : '';
      const cat = document.querySelector('.category-select select');
      const catVal = cat ? cat.value : 'Most Needed Now';
      if (!amt || isNaN(amt) || parseFloat(amt) <= 0) {
        amountInput.style.border = '2px solid #e91e8c';
        amountInput.focus();
        setTimeout(() => { amountInput.style.border = ''; }, 2000);
        return;
      }
      alert(`Thank you! Donating ₹${amt} INR to: ${catVal}\n\nYou will be redirected to the payment page.`);
    });
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  const nlBtn = document.querySelector('.nl-btn');
  const nlInput = document.querySelector('.nl-input');
  if (nlBtn && nlInput) {
    nlBtn.addEventListener('click', () => {
      const email = nlInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        nlInput.style.border = '2px solid var(--navy-dark)';
        nlInput.placeholder = 'Please enter a valid email';
        setTimeout(() => {
          nlInput.style.border = '';
          nlInput.placeholder = 'Enter your email address';
        }, 2000);
        return;
      }
      nlBtn.textContent = '✓ SUBSCRIBED!';
      nlBtn.style.background = '#1a5c2e';
      nlInput.value = '';
      nlInput.placeholder = 'You\'re subscribed!';
      setTimeout(() => {
        nlBtn.textContent = 'SUBSCRIBE';
        nlBtn.style.background = '';
        nlInput.placeholder = 'Enter your email address';
      }, 4000);
    });
  }

  // ============================================
  // SCROLL REVEAL ANIMATION
  // ============================================
  const revealItems = document.querySelectorAll('.cause-card, .stat-item, .featured-card');
  revealItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 80 * (Array.from(revealItems).indexOf(entry.target) % 4));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach(item => revealObserver.observe(item));

});

//------------------------------ Impact Stories----


/* =========================================
   IMPACT STORIES JS
========================================= */

const impactSlides = document.querySelectorAll('.being-slide');
const impactDots = document.querySelectorAll('.being-dot');

let currentImpact = 0;

function showImpactSlide(index){

  impactSlides[currentImpact].classList.remove('active');
  impactDots[currentImpact].classList.remove('active');

  currentImpact = (index + impactSlides.length) % impactSlides.length;

  impactSlides[currentImpact].classList.add('active');
  impactDots[currentImpact].classList.add('active');
}

/* DOT CLICK */

impactDots.forEach((dot,i)=>{

  dot.addEventListener('click',()=>{

    showImpactSlide(i);

  });

});

/* AUTO SLIDE */

setInterval(()=>{

  showImpactSlide(currentImpact + 1);

},5000);