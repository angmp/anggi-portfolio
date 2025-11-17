// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Project filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const width = skillBar.getAttribute('data-width');
        skillBar.style.width = width + '%';
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });

  // Smooth scrolling for navigation links
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

  // Add scroll animation to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    if (index % 2 === 0) {
      item.style.transform = 'translateX(-50px)';
    } else {
      item.style.transform = 'translateX(50px)';
    }
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    timelineObserver.observe(item);
  });

  // Add hover effect to certificates
  const certificateItems = document.querySelectorAll('.certificate-item');
  certificateItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px) scale(1)';
    });
  });

  // Form submission handling (if you add a contact form later)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form submission logic here
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Parallax effect for background elements
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.speed;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Show success message
        contactSuccess.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          contactSuccess.classList.remove('show');
        }, 5000);
        
        // Log the form data (in real scenario, send to server)
        console.log('Form submitted:', {
          name,
          email,
          subject,
          message
        });
        
      }, 2000);
    });
  }

  // Add animation to contact items on scroll
  const contactItems = document.querySelectorAll('.contact-detail-item');
  
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 200);
      }
    });
  }, { threshold: 0.3 });

  contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    contactObserver.observe(item);
  });
});

// ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
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

// ========== PARALLAX EFFECT FOR FLOATING ICONS ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const icons = document.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== NAVBAR BACKGROUND ON SCROLL ==========
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(248, 248, 248, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(248, 248, 248, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// ========== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ==========
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(item);
});

// ========== DYNAMIC YEAR UPDATE IN TIMELINE ==========
const updateYear = () => {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.timeline-year').forEach(yearElement => {
        const text = yearElement.textContent;
        if (text.includes('PRESENT')) {
            // You can dynamically update if needed
        }
    });
};

updateYear();

// Get all project cards and filter buttons
const projectCards = document.querySelectorAll('.project-card');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'Web Development';

// Initialize
function init() {
    updateVisibleCards();
    setupStickyScroll();
}

// Update visible cards based on category
function updateVisibleCards() {
    let visibleIndex = 1;
    
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (cardCategory === currentCategory) {
            card.classList.remove('hidden');
            card.classList.add('visible');
            
            // Update sticky top position based on visible order
            const topOffset = 80 + (visibleIndex - 1) * 20;
            card.style.top = `${topOffset}px`;
            card.style.zIndex = 10 - visibleIndex;
            
            visibleIndex++;
        } else {
            card.classList.add('hidden');
            card.classList.remove('visible');
        }
    });
    
    // Trigger scroll effect update
    setTimeout(updateStickyEffect, 100);
}

// Setup sticky scroll effect
function setupStickyScroll() {
    window.addEventListener('scroll', updateStickyEffect);
    updateStickyEffect(); // Initial call
}

function updateStickyEffect() {
    const visibleCards = document.querySelectorAll('.project-card.visible');
    const scrollY = window.scrollY;
    
    visibleCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = parseInt(card.style.top) || 80;
        
        // Calculate scale based on scroll position
        const distanceFromTop = cardRect.top;
        const maxDistance = 200;
        const scale = Math.max(0.95, Math.min(1, 1 - (Math.max(0, cardTop - distanceFromTop) / maxDistance) * 0.05));
        
        // Apply scale to card inner
        const cardInner = card.querySelector('.project-card-inner');
        if (cardInner && distanceFromTop <= cardTop) {
            cardInner.style.transform = `scale(${scale})`;
        } else if (cardInner) {
            cardInner.style.transform = 'scale(1)';
        }
    });
}

// Handle filter button clicks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Update current category
        currentCategory = btn.dataset.category;
        
        // Update visible cards
        updateVisibleCards();
        
        // Scroll to top of projects section smoothly
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateStickyEffect();
    }, 250);
});
// Tambahkan JavaScript ini ke file JS Anda atau di akhir body HTML
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Fungsi untuk menampilkan kartu dengan animasi stagger
    function showCards(cards) {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100); // Stagger delay 100ms per card
        });
    }

    // Fungsi untuk menyembunyikan kartu
    function hideCards(cards) {
        cards.forEach(card => {
            card.classList.remove('show');
            card.classList.add('hidden');
        });
    }

    // Inisialisasi: tampilkan semua kartu
    showCards(projectCards);

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus active dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambah active ke tombol yang diklik
            this.classList.add('active');

            const filter = this.getAttribute('data-category').toLowerCase();

            // Sembunyikan semua kartu dulu
            hideCards(projectCards);

            // Setelah delay, tampilkan kartu yang sesuai
            setTimeout(() => {
                const visibleCards = Array.from(projectCards).filter(card => {
                    const category = card.getAttribute('data-category').toLowerCase();
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        return true;
                    }
                    return false;
                });
                showCards(visibleCards);
            }, 300); // Delay untuk animasi hide
        });
    });

    // Intersection Observer untuk animasi saat scroll (opsional, untuk efek wow)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Initialize
function init() {
    updateVisibleCards();
}

// Update visible cards based on category
function updateVisibleCards() {
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (cardCategory === currentCategory) {
            card.classList.remove('hidden');
            card.classList.add('visible');
            visibleCount++;
        } else {
            card.classList.add('hidden');
            card.classList.remove('visible');
        }
    });
    
    // Adjust container height based on number of visible cards
    const baseHeight = 400; // vh
    const heightPerCard = 80; // vh per card
    const totalHeight = baseHeight + (visibleCount * heightPerCard);
    stackContainer.style.minHeight = `${totalHeight}vh`;
}

// Handle filter button clicks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Update current category
        currentCategory = btn.dataset.category;
        
        // Update visible cards
        updateVisibleCards();
        
        // Scroll to top of projects section smoothly
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    init();
});


/*PROJECT PAGES*/
// ========== SMOOTH SCROLL ==========
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

// ========== SCROLL TO TOP ==========
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== PARALLAX EFFECT FOR FLOATING ICONS ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const icons = document.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== NAVBAR BACKGROUND ON SCROLL ==========
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(248, 248, 248, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(248, 248, 248, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// ========== PROJECT ROW ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Animate project rows on scroll
document.querySelectorAll('.project-row').forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(row);
});

// ========== PROJECT ROW HOVER INTERACTION ==========
document.querySelectorAll('.project-row').forEach(row => {
    const popup = row.querySelector('.project-popup');
    
    // Prevent popup from closing when hovering over it
    if (popup) {
        popup.addEventListener('mouseenter', () => {
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';
            popup.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        popup.addEventListener('mouseleave', () => {
            // Only hide if not hovering parent row
            if (!row.matches(':hover')) {
                popup.style.opacity = '0';
                popup.style.visibility = 'hidden';
                popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
            }
        });
    }
});

// ========== BUTTON RIPPLE EFFECT ==========
document.querySelectorAll('.popup-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .popup-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== UPDATE TIME IN FOOTER ==========
function updateTime() {
    const now = new Date();
    const options = {
        hour12: false,
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeStr = now.toLocaleTimeString('en-US', options);
    
    const timeDisplay = document.querySelector('.time-display');
    if (timeDisplay) {
        timeDisplay.textContent = `${timeStr} GMT+7`;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// ========== ANIMATE HEADER ON LOAD ==========
window.addEventListener('load', () => {
    const header = document.querySelector('.projects-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            header.style.transition = 'all 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========== PREVENT DEFAULT ON ARROW LINKS ==========
document.querySelectorAll('.project-arrow').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add custom action here if needed
    });
});

// ========== CONSOLE LOG FOR DEBUGGING ==========
console.log('Projects Page JavaScript loaded successfully! 🎉');
console.log('Smooth scrolling enabled ✓');
console.log('Parallax effects active ✓');
console.log('Animation observers initialized ✓');
console.log('Project hover popups ready ✓');
console.log('Time display updating ✓');

// Tambahkan JavaScript ini ke file JS Anda atau di akhir body HTML
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Simple validation (you can add more complex validation)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            // Simulate form submission (replace with actual backend call)
            console.log('Form submitted:', { name, email, subject, message });

            // Hide form and show success message
            contactForm.style.display = 'none';
            contactSuccess.style.display = 'block';

            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Smooth scroll for arrow icons (if needed)
    const arrows = document.querySelectorAll('.icon.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('onclick').match(/'#(\w+)'/)[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add fade-in animation on scroll for sections
    const sections = document.querySelectorAll('.awards-section, .certificates-section, .contact-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
// Function to open modal
        function openModal(modalId) {
            console.log('Opening modal:', modalId);
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                console.error('Modal not found:', modalId);
            }
        }

        // Function to close modal
        function closeModal(modalId) {
            console.log('Closing modal:', modalId);
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }

        // Close modal when clicking outside the content
        document.addEventListener('click', function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    closeModal(modal.id);
                }
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    if (modal.classList.contains('active')) {
                        closeModal(modal.id);
                    }
                });
            }
        });

        // Debug info
        console.log('Script loaded successfully');
        console.log('Available modals:', document.querySelectorAll('.modal').length);