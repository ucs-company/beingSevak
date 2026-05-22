
//Annapurna

// Navbar shadow on scroll

window.addEventListener('scroll', function(){

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
  }
  else{
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
  }

});


// Reveal Animation

const revealElements = document.querySelectorAll(
  '.about-card, .highlight-card, .impact-box, .gallery-card, .testimonial-card'
);

window.addEventListener('scroll', reveal);

function reveal(){

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element)=>{

    const boxTop = element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      element.classList.add('active');
    }

  });

}

reveal();






