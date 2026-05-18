


const items = document.querySelectorAll('.item, .card');

window.addEventListener('scroll',()=>{
  items.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

items.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = '0.6s';
});

