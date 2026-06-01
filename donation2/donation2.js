(function () {
  'use strict';

  /* ===== TAB SWITCHING ===== */
  var tabLinks = document.querySelectorAll('.tab-link');
  var tabContents = document.querySelectorAll('.tab-content');

  function activateTab(targetId) {
    tabLinks.forEach(function (link) {
      link.classList.remove('active');
    });

    tabContents.forEach(function (content) {
      content.classList.remove('active');
    });

    var activeLink = document.querySelector('.tab-link[data-target="' + targetId + '"]');
    var activeContent = document.getElementById(targetId);

    if (activeLink) activeLink.classList.add('active');
    if (activeContent) activeContent.classList.add('active');
  }

  tabLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var target = link.getAttribute('data-target');
      activateTab(target);
    });
  });

  /* ===== URL PARAM AUTO-TAB ===== */
  var params = new URLSearchParams(window.location.search);
  var tabParam = params.get('tab');
  if (tabParam) {
    activateTab(tabParam);
  }

  /* ===== NAVBAR SHADOW ON SCROLL ===== */
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
      } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
      }
    }
  });

})();
