
// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll(
  '.mission-card, .about-box, .gallery-item, .impact-stats div'
);

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';
    }

  });

});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s';
});
```

Data inspired by Mission Bezubaan from Being Sevak Charitable Trust. ([beingsevak.org](https://beingsevak.org/wp-content/uploads/2024/01/E-Brochure-BSCT.pdf?utm_source=chatgpt.com))
