(function() {
  var scripts = document.getElementsByTagName('script');
  var thisScript = scripts[scripts.length - 1];
  var scriptSrc = thisScript.getAttribute('src') || '';
  var p = (scriptSrc.match(/^(\.\.\/)*/) || [''])[0];

  var navHTML =
    '<header class="navbar">' +
      '<div class="navbar-inner">' +
        '<div class="nav-logo">' +
          '<div class="logo-circle">' +
            '<img src="' + p + 'logo11.png" alt="MATW Logo" style="width:100%;height:100%;object-fit:contain;"/>' +
            '<div class="logo-fallback"><div class="logo-globe"></div></div>' +
          '</div>' +
          '<img src="' + p + 'images/bs.png" alt="Text Logo" class="BS-text-logo">' +
        '</div>' +
        '<div class="nav-quick">' +
          '<div class="zakat-circle-wrap">' +
            '<div class="zakat-pulse-ring"></div>' +
            '<div class="zakat-pulse-ring ring2"></div>' +
            '<button class="zakat-circle-btn">' +
              '<img src="https://matwproject.org.uk/static/media/zakat.4b8e5d8777306e3a7621.png" alt="Zakat"/>' +
            '</button>' +
            '<span class="zakat-label">Ann\u0926\u093E\u0928</span>' +
          '</div>' +
        '</div>' +
        '<nav class="nav-links">' +
          '<div class="nav-item dropdown">' +
            '<a href="#">ABOUT US <i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'about-bsct.html">About BSCT</a>' +
              '<a href="' + p + 'management.html">Management</a>' +
              '<a href="' + p + 'mission-vision.html">Mission/Vision</a>' +
              '<a href="' + p + 'trust-documents.html">Trust Documents</a>' +
              '<a href="' + p + 'where-we-work.html">Where We Work</a>' +
              '<a href="' + p + 'awards.html">Awards/Achievements</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">PROJECTS <i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="#">Mission Annapurna</a>' +
              '<a href="#">Mission Vidhya</a>' +
              '<a href="#">Mission Aurat</a>' +
              '<a href="#">Mission Beach Sevak</a>' +
              '<a href="#">Mission Aadhar</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">GALLERY & MEDIA ROOM <i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'photos.html">Photos</a>' +
              '<a href="#">Youtube Video</a>' +
              '<a href="#">Press Release</a>' +
              '<a href="#">In News Paper</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item">' +
            '<a href="#" class="new-badge">2026 <span class="badge-new">NEW</span></a>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">Contact Us<i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="#">About Amanah</a>' +
              '<a href="#">Wills & Legacy</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-item dropdown">' +
            '<a href="#">GET INVOLVED<i class="fas fa-chevron-down"></i></a>' +
            '<div class="dropdown-menu">' +
              '<a href="' + p + 'donation.html">Individual Donation</a>' +
              '<a href="#">Volunteers(SEVAK BANO)</a>' +
              '<a href="#">Corporate Collaboration</a>' +
              '<a href="#">School/Institute Collaboration</a>' +
              '<a href="#">NGO Collaboration</a>' +
            '</div>' +
          '</div>' +
        '</nav>' +
        '<div class="nav-right">' +
          '<div class="yt-avatar">' +
            '<div class="yt-icon"><i class="fab fa-youtube"></i></div>' +
            '<img class="avatar-img" src="' + p + 'images/host.png" alt="host" onerror="this.style.display=\'none\'"/>' +
          '</div>' +
          '<a href="' + p + 'donation.html" class="donate-btn">DONATE</a>' +
        '</div>' +
        '<button class="hamburger" id="hamburger" aria-label="Menu"><i class="fas fa-bars"></i></button>' +
      '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobileMenu">' +
      '<button class="close-menu" id="closeMenu"><i class="fas fa-times"></i></button>' +
      '<nav>' +
        '<a href="#">Give Now</a>' +
        '<a href="#">Zakat</a>' +
        '<a href="#">Islamic Giving</a>' +
        '<a href="#">Qurban 2026</a>' +
        '<a href="#">Amanah</a>' +
        '<a href="#">About Us</a>' +
        '<a href="#" class="mobile-donate-btn">DONATE</a>' +
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
