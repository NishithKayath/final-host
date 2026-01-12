// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .feature-item, .contact-item, .about-text, .about-image');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Basic validation
    let isValid = true;
    const formGroups = contactForm.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const errorMessage = group.querySelector('.error-message');
        
        if (errorMessage) {
            errorMessage.remove();
        }
        
        input.classList.remove('error');
        
        if (!input.value.trim()) {
            showError(group, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(group, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            showError(group, 'Please enter a valid phone number');
            isValid = false;
        }
    });
    
    if (isValid) {
        // Show success message
        showSuccessMessage(contactForm, 'Thank you for your message! We will contact you soon.');
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, message });
    }
});

// Helper functions
function showError(formGroup, message) {
    const input = formGroup.querySelector('input, textarea');
    input.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

function showSuccessMessage(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentImageIndex = 0;
const lightboxImages = Array.from(galleryItems).map(item => item.src);

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        createLightbox(index);
    });
});

function createLightbox(index) {
    currentImageIndex = index;
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${lightboxImages[currentImageIndex]}" alt="Gallery Image">
            <div class="lightbox-nav">
                <span class="lightbox-prev">&#10094;</span>
                <span class="lightbox-next">&#10095;</span>
            </div>
        </div>
    `;
    
    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lightbox.active {
            opacity: 1;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 40px;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .lightbox-close:hover {
            color: #1a5f3f;
        }
        
        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
        }
        
        .lightbox-prev,
        .lightbox-next {
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: rgba(26, 95, 63, 0.8);
            padding: 10px 15px;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .lightbox-prev:hover,
        .lightbox-next:hover {
            background: #1a5f3f;
            transform: scale(1.1);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(lightbox);
    
    // Show lightbox with animation
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    // Close lightbox
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
        updateLightboxImage(lightbox);
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
        updateLightboxImage(lightbox);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);
}

function updateLightboxImage(lightbox) {
    const img = lightbox.querySelector('img');
    img.style.opacity = '0';
    
    setTimeout(() => {
        img.src = lightboxImages[currentImageIndex];
        img.style.opacity = '1';
    }, 200);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.remove();
            document.removeEventListener('keydown', handleKeydown);
        }, 300);
    }
}

function handleKeydown(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
            updateLightboxImage(lightbox);
        }
    } else if (e.key === 'ArrowRight') {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
            updateLightboxImage(lightbox);
        }
    }
}

// Loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.classList.add('loading');
        
        img.addEventListener('load', () => {
            img.classList.remove('loading');
        });
        
        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzE3Ny45MSAxNTAgMTYwIDE2Ny45MSAxNjAgMTkwQzE2MCAyMTIuMDkgMTc3LjkxIDIzMCAyMDAgMjMwQzIyMi4wOSAyMzAgMjQwIDIxMi4wOSAyNDAgMTkwQzI0MCAxNjcuOTEgMjIyLjA5IDE1MCAyMDAgMTUwWk0yMDAgMTcwQzIwOC4yOCAxNzAgMjE1IDE3Ni43MiAyMTUgMTkwQzIxNSAyMDMuMjggMjA4LjI4IDIxMCAyMDAgMjEwQzE5MS43MiAyMTAgMTg1IDIwMy4yOCAxODUgMTkwQzE4NSAxNzYuNzIgMTkxLjcyIDE3MCAyMDAgMTcwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L3N2Zz4K';
        });
    });
});

// Performance optimization - Debounce scroll events
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

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations can be added here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('प्रधान जी ग्रुप्स website loaded successfully!');
    
    // Add smooth reveal animation for hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add CSS for hero content animation
const heroStyle = document.createElement('style');
heroStyle.textContent = `
    .hero-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease;
    }
`;
document.head.appendChild(heroStyle);
