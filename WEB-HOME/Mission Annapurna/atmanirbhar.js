
const cards = document.querySelectorAll('.card,.box');

window.addEventListener('scroll',()=>{
  cards.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    }
  });
});

cards.forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(30px)';
  el.style.transition='0.6s';
});
