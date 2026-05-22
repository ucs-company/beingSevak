
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






//# Notes

//* Aap images replace kar sakte ho.
//* Unsplash images already use ki gayi hai.
//* Color theme:

 // * #00a3da
  //* #f4f6f8
 // * #315270
* Full modern glassmorphism + 3D NGO design.
* Responsive mobile layout included.
* Smooth hover animation & floating effects added.
