/* ============================================================
   SkullDAWG Productions — shared site behaviour
   Theme toggle · mobile menu · lightbox · image fallback
   ============================================================ */
(function () {
  /* ---- THEME ---------------------------------------------------- */
  function setToggleLabel(theme) {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.textContent = theme === 'dark' ? '☀' : '🌙';
      btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    setToggleLabel(theme);
  }
  var current = document.documentElement.dataset.theme || 'dark';
  setToggleLabel(current);
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.theme-toggle');
    if (!t) return;
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  /* ---- ACTIVE NAV LINK ----------------------------------------- */
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (here === '') here = 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here) a.setAttribute('aria-current', 'page');
  });

  /* ---- MOBILE MENU --------------------------------------------- */
  var burger = document.querySelector('.nav-burger');
  var mobile = document.querySelector('.nav-mobile');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? '✕' : '☰';
    });
    mobile.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobile.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = '☰';
      }
    });
  }

  /* ---- IMAGE FALLBACK ------------------------------------------ */
  /* Any <img class="js-img"> that fails to load is replaced with a
     labelled placeholder, so the layout holds before /images deploys. */
  function fallback(img) {
    var ph = document.createElement('div');
    ph.className = 'img-ph ' + (img.className.replace('js-img', '').trim());
    ph.setAttribute('role', 'img');
    ph.setAttribute('aria-label', img.alt || '');
    ph.innerHTML = '<span class="ph-skull">\uD83D\uDC15\u200D\uD83E\uDDBA</span>' +
                   '<span class="ph-label">' + (img.alt || '') + '</span>';
    if (img.parentNode) img.parentNode.replaceChild(ph, img);
  }
  document.querySelectorAll('img.js-img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) { fallback(img); return; }
    img.addEventListener('error', function () { fallback(img); });
  });

  /* ---- LIGHTBOX ------------------------------------------------- */
  var lb = document.querySelector('.lb');
  if (lb) {
    var lbImg = lb.querySelector('img');
    function openLb(src, alt) { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    document.querySelectorAll('.g-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        if (img && img.src) openLb(img.src, img.alt);
      });
    });
    lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ---- CONTACT FORM (mailto, no backend) ------------------------ */
  var form = document.querySelector('[data-mailto]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = form.getAttribute('data-mailto');
      var name = (form.querySelector('#cf-name') || {}).value || '';
      var email = (form.querySelector('#cf-email') || {}).value || '';
      var msg = (form.querySelector('#cf-msg') || {}).value || '';
      var subject = encodeURIComponent('Project inquiry from ' + (name || 'your site'));
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
})();
