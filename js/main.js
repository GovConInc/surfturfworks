/* ============================================
   BRAD'S ELECTRICAL CONSTRUCTION - MAIN JS
   Modern Minimalist Design
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initAnimations();
    initCounters();
    initPartnersScroll();
});

/* ============================================
   GLOBAL TOGGLE MENU (called from HTML onclick)
   ============================================ */
function toggleMenu() {
    const menu = document.querySelector('.navbar__menu');
    const toggle = document.querySelector('.navbar__toggle');
    
    if (menu && toggle) {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

/* ============================================
   NAVBAR FUNCTIONALITY
   ============================================ */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

/* ============================================
   CONTACT FORM - Using FormSubmit.co
   Form submits directly, no JS handler needed
   ============================================ */
// Note: Contact form now uses FormSubmit.co directly via form action
// No JavaScript handling required - it submits natively

function showFormSuccess() {
    // Show success message if redirected back with success param
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.innerHTML = `
                <div class="form-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="var(--accent)" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting Brad's Electrical. We'll get back to you within 24 hours.</p>
                    <a href="index.html" class="btn btn--primary">Back to Home</a>
                </div>
            `;
        }
    }
}

// Check for form success on page load
document.addEventListener('DOMContentLoaded', showFormSuccess);

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number
        const formatted = formatNumber(Math.floor(current), element.getAttribute('data-format'));
        element.textContent = formatted;
    }, 16);
}

function formatNumber(num, format) {
    switch (format) {
        case 'currency':
            return '$' + num.toLocaleString();
        case 'plus':
            return num.toLocaleString() + '+';
        case 'years':
            return num + '+';
        default:
            return num.toLocaleString();
    }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

/* ============================================
   PARTNERS BANNER CLONE FOR INFINITE SCROLL
   ============================================ */
function initPartnersScroll() {
    const track = document.querySelector('.partners__track');
    if (!track) return;
    
    // Clone items for seamless loop
    const items = track.querySelectorAll('.partners__item');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

// Initialize partners scroll on load
document.addEventListener('DOMContentLoaded', initPartnersScroll);

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
