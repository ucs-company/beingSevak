const newspaperData = [
  { url: "../images/newspaperpress/1.jpg", label: "Mumbai Edition", year: 2023 },
  { url: "../images/newspaperpress/2.jpg", label: "National Daily", year: 2023 },
  { url: "../images/newspaperpress/3.jpg", label: "City Times", year: 2023 },
  { url: "../images/newspaperpress/4.jpg", label: "The Chronicle", year: 2023 },
  { url: "../images/newspaperpress/5.jpg", label: "Morning Herald", year: 2023 },
  { url: "../images/newspaperpress/6.jpg", label: "Press Gazette", year: 2023 },
  { url: "../images/newspaperpress/7.jpg", label: "Community Voice", year: 2023 },
  { url: "../images/newspaperpress/8.jpg", label: "Daily Post", year: 2023 },
  { url: "../images/newspaperpress/9.jpg", label: "Metro News", year: 2023 },
  { url: "../images/newspaperpress/10.jpg", label: "Regional Times", year: 2023 },
  { url: "../images/newspaperpress/11.jpg", label: "The Guardian Post", year: 2023 },
  { url: "../images/newspaperpress/12.jpg", label: "Front Page", year: 2023 }
];

const tickerHeadlines = [
  "Being Sevak featured across 12 major newspaper publications",
  "Mission Annapurna receives widespread media acclaim",
  "National Award coverage reaches millions of readers",
  "Save the Flag campaign highlighted in leading dailies",
  "World Record achievement celebrated in the press",
  "Paryavaran Mitra recognition covered by Raj Bhavan",
  "Diwali Anna Potli distribution featured in 7 states' newspapers"
];

let currentIndex = 0;
let activeFilter = 'all';

/* ─── SHUFFLE ─── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ─── RENDER GALLERY ─── */
function renderGallery() {
  const grid = document.getElementById('newsGrid');
  const filtered = activeFilter === 'all'
    ? newspaperData
    : newspaperData.filter(d => d.year === parseInt(activeFilter));

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-mid);">
        <i class="fas fa-newspaper" style="font-size:48px;color:#ddd;display:block;margin-bottom:16px;"></i>
        <p style="font-size:18px;">No clippings found for this year.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((item, i) => `
    <div class="news-item" onclick="openLightbox(${newspaperData.indexOf(item)})" style="animation-delay:${(i % 12) * 0.03}s">
      <div class="news-item-badge">${item.label}</div>
      <div class="news-item-stamp">PRESS</div>
      <div class="news-item-inner">
        <img src="${item.url}" alt="${item.label}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'height:100%;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:32px;\\'><i class=\\'fas fa-file-image\\'></i></div>'">
        <div class="news-item-overlay">
          <span><i class="fas fa-search-plus"></i> Click to view</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ─── FILTER ─── */
function setFilter(year) {
  activeFilter = year;
  document.querySelectorAll('.news-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.year === year);
  });
  renderGallery();
}

/* ─── FEATURED ROTATOR ─── */
function rotateFeatured() {
  const img = document.getElementById('featuredImg');
  const label = document.getElementById('featuredLabel');
  if (!img) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % newspaperData.length;
    const item = newspaperData[i];
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = item.url;
      if (label) label.textContent = item.label;
      img.style.opacity = 1;
    }, 300);
  }, 4000);
}

/* ─── LIGHTBOX ─── */
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const item = newspaperData[currentIndex];
  img.src = item.url;
  counter.textContent = `${currentIndex + 1} / ${newspaperData.length}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentIndex = (currentIndex + dir + newspaperData.length) % newspaperData.length;
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const item = newspaperData[currentIndex];
  img.style.animation = 'none';
  img.offsetHeight;
  img.src = item.url;
  img.style.animation = 'lightboxZoom 0.35s ease';
  counter.textContent = `${currentIndex + 1} / ${newspaperData.length}`;
}

/* ─── TILT EFFECT ─── */
function applyTilt() {
  document.querySelectorAll('.news-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform =
        `translateY(-6px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  shuffle(newspaperData);
  renderGallery();
  rotateFeatured();

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));

  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  setTimeout(applyTilt, 600);
});
