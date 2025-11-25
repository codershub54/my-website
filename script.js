// ==================== Smooth Scrolling ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Lazy Loading Images ==================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Form Handling ==================== */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// ==================== Scroll Animation ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add scroll animation to skill cards, project cards, and team cards
document.querySelectorAll('.skill-card, .project-card, .team-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== Active Navigation Link ==================== */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = 'var(--text-dark)';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ==================== Navbar Sticky Effect ==================== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== CTA Button Animation ==================== */
document.querySelector('.cta-button').addEventListener('click', () => {
    const teamSection = document.getElementById('team');
    teamSection.scrollIntoView({ behavior: 'smooth' });
});

// ==================== Page Load Animation ==================== */
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '0';
    document.querySelector('.hero-content').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.hero-content').style.transition = 'all 0.8s ease';
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 100);
});

// ==================== Responsive Navigation Toggle ==================== */
// You can expand this for mobile menu if needed
const navLinks = document.querySelector('.nav-links');
if (window.innerWidth <= 768) {
    // Mobile menu handling can be added here
}
