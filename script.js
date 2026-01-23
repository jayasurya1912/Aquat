

 

 window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  });

 
  
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCount();
    });
  };

  // Run when section is visible
  let triggered = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter-section');
    const sectionTop = section.getBoundingClientRect().top;

    if (!triggered && sectionTop < window.innerHeight - 100) {
      animateCounters();
      triggered = true;
    }
  });

const text = "Hindustan Aquatech";

const typingDelay = 120;     // typing speed
const deletingDelay = 80;   // deleting speed
const pauseDelay = 1500;    // delay between type & delete

const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, typingDelay);

  } else if (isDeleting && index > 0) {
    typingElement.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeEffect, deletingDelay);

  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, pauseDelay);
  }
}

typeEffect();

