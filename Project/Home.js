const scrollLine = document.querySelector('.scroll-line');

    function updateScrollProgress() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
      scrollLine.style.width = `${percentScrolled}%`;
    }

    updateScrollProgress();

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    });

    window.addEventListener('resize', updateScrollProgress);

    AOS.init({
        duration : 2000,
      })
      

      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
           behavior: 'smooth'
        }); 
     }
     


const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
  let items = document.querySelectorAll('section');
  for (let i = 0; i < items.length; i++){
    items[i].style.background = randomColor({luminosity: 'light'});
  }
  cssScrollSnapPolyfill()
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.image');
  viewbox.forEach(image => {
    observer.observe(image);
  });

document.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollPosition = window.scrollY;
  
    const fadePoint = window.innerHeight / 2;
  
    if (scrollPosition > fadePoint) {
      hero.classList.add("fade-out");
    } else {
      hero.classList.remove("fade-out");
    }
  });
