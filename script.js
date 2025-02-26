// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    this.reset();
});

// Scroll Animation
function revealElements() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);