(function() {
  var scripts = document.getElementsByTagName('script');
  var thisScript = scripts[scripts.length - 1];
  var scriptSrc = thisScript.getAttribute('src') || '';
  var p = (scriptSrc.match(/^(\.\.\/)*/) || [''])[0];

  var navHTML =
    '<header class="navbar">' +
      '<div class="navbar-inner">' +
        '<a href="' + p + 'index.html" class="nav-logo">' +
          '<div class="logo-circle">' +
            '<img src="' + p + 'logo11.png" alt="MATW Logo" style="width:100%;height:100%;object-fit:contain;"/>' +
            '<div class="logo-fallback"><div class="logo-globe"></div></div>' +
          '</div>' +
          '<img src="' + p + 'images/bs.png" alt="Text Logo" class="BS-text-logo">' +
        '</a>' +
        '<div class="nav-quick">' +
          '<div class="zakat-circle-wrap">' +
            '<div class="zakat-pulse-ring"></div>' +
            '<div class="zakat-pulse-ring ring2"></div>' +
            '<a href="' + p + 'Mission Annapurna/ann.html">' +
              '<button class="zakat-circle-btn">' +
                '<img src="https://matwproject.org.uk/static/media/zakat.4b8e5d8777306e3a7621.png" alt="Anndaan"/>' +
              '</button>' +
            '</a>' +
            '<span class="zakat-label">Ann\u0926\u093E\u0928</span>' +
          '</div>' +
        '</div>' +
        '<br>' +
        '<div class="nav-quick">' +
          '<div class="zakat-circle-wrap">' +
            '<div class="zakat-pulse-ring"></div>' +
            '<div class="zakat-pulse-ring ring2"></div>' +
            '<a href="' + p + 'Mission Annapurna/sevaknivash.html" class="zakat-circle-btn">' +
              '<img src="https://matwproject.org.uk/static/media/zakat.4b8e5d8777306e3a7621.png" alt="Sevak Nivas"/>' +
            '</a>' +
            '<span class="zakat-label">Sevak\u0928\u093F\u0935\u093E\u0938</span>' +
          '</div>' +
        '</div>' +
        '<nav class="nav-links">' +
          '<div class="nav-item dropdown">' +
            '<a href="#">ABOUT US <i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'about-bsct.html">About BSCT</a>' +
              '<a href="' + p + 'management.html">Management</a>' +
              '<a href="' + p + 'trust-documents.html">Trust Documents</a>' +
              '<a href="' + p + 'where-we-work.html">Where We Work</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">WHAT WE DO <i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'Mission Annapurna/Annapurna.html">Mission Annapurna</a>' +
              '<a href="' + p + 'Mission Annapurna/Vidhya.html">Mission Vidhya</a>' +
              '<a href="' + p + 'Mission Annapurna/aurat.html">Mission Aurat</a>' +
              '<a href="' + p + 'Mission Annapurna/bezubaan.html">Mission Bezubaan</a>' +
              '<a href="' + p + 'Mission Annapurna/atmanirbhar.html">Mission Atmanirbhar</a>' +
              '<a href="' + p + 'Mission Annapurna/Wellness.html">Mission Arogya</a>' +
              '<a href="' + p + 'Mission Annapurna/sevak.html">Sevak Niwas Kendra</a>' +
              '<a href="' + p + 'Mission Annapurna/beach.html">Mission Beach Sevak</a>' +
              '<a href="' + p + 'Mission Annapurna/Eco.html">Mission Eco-Warriors</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">NEWS & STORIES<i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'awards.html">Awards/Achievements</a>' +
              '<a href="' + p + 'press/press.html">Press Release</a>' +
              '<a href="' + p + 'newspaper/newspaper.html">In News Paper</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item">' +
            '<a href="#">CSR</a>' +
          '</div>' +
          '<div class="nav-item">' +
            '<a href="' + p + 'contactus/contact.html">CONTACT US</a>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">GET INVOLVED<i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'donation.html">Individual Donation</a>' +
              '<a href="#">Volunteers(SEVAK BANO)</a>' +
              '<a href="#">Corporate Collaboration</a>' +
              '<a href="#">School/Institute Collaboration</a>' +
              '<a href="#">NGO Collaboration</a>' +
              '<a href="' + p + 'careers.html">Careers</a>' +
            '</div>' +
          '</div>' +
        '</nav>' +
        '<div class="nav-right">' +
          '<div class="yt-avatar">' +
            '<a href="https://www.youtube.com/@BeingSevak" target="_blank" rel="noopener noreferrer">' +
              '<div class="yt-icon"><i class="fab fa-youtube"></i></div>' +
            '</a>' +
            '<img class="avatar-img" src="' + p + 'images/host.png" alt="host" onerror="this.style.display=\'none\'"/>' +
          '</div>' +
          '<a href="' + p + 'donation2/donation2.html" class="donate-btn">DONATE</a>' +
        '</div>' +
        '<a href="' + p + 'donation2/donation2.html" class="mob-donate-btn">DONATE</a>' +
        '<button class="hamburger" id="hamburger" aria-label="Menu"><i class="fas fa-bars"></i></button>' +
      '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobileMenu">' +
      '<button class="close-menu" id="closeMenu"><i class="fas fa-times"></i></button>' +
      '<nav class="mobile-nav">' +
        '<div class="mnav-item has-sub">' +
          '<a href="#" class="mnav-link">ABOUT US <i class="fas fa-chevron-down"></i></a>' +
          '<div class="mnav-sub">' +
            '<a href="' + p + 'about-bsct.html">About BSCT</a>' +
            '<a href="' + p + 'management.html">Management</a>' +
            '<a href="' + p + 'trust-documents.html">Trust Documents</a>' +
            '<a href="' + p + 'where-we-work.html">Where We Work</a>' +
          '</div>' +
        '</div>' +
        '<div class="mnav-item has-sub">' +
          '<a href="#" class="mnav-link">WHAT WE DO <i class="fas fa-chevron-down"></i></a>' +
          '<div class="mnav-sub">' +
            '<a href="' + p + 'Mission Annapurna/Annapurna.html">Mission Annapurna</a>' +
            '<a href="' + p + 'Mission Annapurna/Vidhya.html">Mission Vidhya</a>' +
            '<a href="' + p + 'Mission Annapurna/aurat.html">Mission Aurat</a>' +
            '<a href="' + p + 'Mission Annapurna/bezubaan.html">Mission Bezubaan</a>' +
            '<a href="' + p + 'Mission Annapurna/atmanirbhar.html">Mission Atmanirbhar</a>' +
            '<a href="' + p + 'Mission Annapurna/Wellness.html">Mission Arogya</a>' +
            '<a href="' + p + 'Mission Annapurna/sevak.html">Sevak Niwas Kendra</a>' +
            '<a href="' + p + 'Mission Annapurna/beach.html">Mission Beach Sevak</a>' +
            '<a href="' + p + 'Mission Annapurna/Eco.html">Mission Eco-Warriors</a>' +
          '</div>' +
        '</div>' +
        '<div class="mnav-item has-sub">' +
          '<a href="#" class="mnav-link">NEWS & STORIES <i class="fas fa-chevron-down"></i></a>' +
          '<div class="mnav-sub">' +
            '<a href="' + p + 'awards.html">Awards/Achievements</a>' +
            '<a href="' + p + 'press/press.html">Press Release</a>' +
            '<a href="' + p + 'newspaper/newspaper.html">In News Paper</a>' +
          '</div>' +
        '</div>' +
        '<div class="mnav-item">' +
          '<a href="#" class="mnav-link">CSR</a>' +
        '</div>' +
        '<div class="mnav-item">' +
          '<a href="' + p + 'contactus/contact.html" class="mnav-link">CONTACT US</a>' +
        '</div>' +
        '<div class="mnav-item has-sub">' +
          '<a href="#" class="mnav-link">GET INVOLVED <i class="fas fa-chevron-down"></i></a>' +
          '<div class="mnav-sub">' +
            '<a href="' + p + 'donation.html">Individual Donation</a>' +
            '<a href="#">Volunteers (SEVAK BANO)</a>' +
            '<a href="#">Corporate Collaboration</a>' +
            '<a href="#">School/Institute Collaboration</a>' +
            '<a href="#">NGO Collaboration</a>' +
            '<a href="' + p + 'careers.html">Careers</a>' +
          '</div>' +
        '</div>' +
        '<a href="' + p + 'donation2/donation2.html" class="mobile-donate-btn">DONATE</a>' +
      '</nav>' +
    '</div>';

  var root = document.getElementById('nav-root');
  if (root) {
    root.innerHTML = navHTML;
  }

  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var closeMenu = document.getElementById('closeMenu');
  if (hamburger) hamburger.addEventListener('click', function() { mobileMenu.classList.add('open'); });
  if (closeMenu) closeMenu.addEventListener('click', function() { mobileMenu.classList.remove('open'); });
})();
