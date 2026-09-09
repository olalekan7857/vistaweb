document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const bar = document.querySelector('.bar');

    //Box animation
    const boxes = document.querySelectorAll('.animate-card');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Animate only once
        }
    });
    }, {
    threshold: 0.3
    });

    boxes.forEach(box => observer.observe(box));
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    // const animateOnScroll = function() {
    //     const elements = document.querySelectorAll('.about-image, .about-content, .service-card, .skill-card, .portfolio-item, .pricing-card');
        
    //     elements.forEach(element => {
    //         const elementPosition = element.getBoundingClientRect().top;
    //         const screenPosition = window.innerHeight / 1.2;
            
    //         if (elementPosition < screenPosition) {
    //             element.style.opacity = '1';
    //             element.style.transform = 'translateY(0)';
    //         }
    //     });
    // };
    
    // // Set initial state for animated elements
    // const animatedElements = document.querySelectorAll('.about-image, .about-content, .service-card, .skill-card, .portfolio-item, .pricing-card');
    // animatedElements.forEach(element => {
    //     element.style.opacity = '0';
    //     element.style.transform = 'translateY(20px)';
    //     element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // });
    
    // window.addEventListener('scroll', animateOnScroll);
    // // Trigger once on load in case elements are already in view
    // animateOnScroll();
    
    // Hero section height adjustment
    // function setHeroHeight() {
    //     const hero = document.querySelector('.hero');
    //     hero.style.height = window.innerWidth >= 700 ? '100vh' : 'calc(100vh - 60px)';
    // }
    
    // window.addEventListener('resize', setHeroHeight);
    // setHeroHeight();
});


// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > window.innerHeight) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Add a temporary animation class
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 300);
});


// Section Observer for Active Nav Links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Add this to your existing event listeners
window.addEventListener('scroll', () => {
  updateActiveNav();
});

// Initialize on load
updateActiveNav();
