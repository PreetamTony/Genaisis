/**
 * GenAIsis Symposium Website JavaScript
 * Handles all interactive functionality for the magical symposium website
 */

// ============================================================================
// INITIALIZATION
// ============================================================================

// Document Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    try {
        setupNavigation();
        setupMagicalCursor();
        setupParticleSystem();
        setupCountdownTimer();
        setupScrollEffects();
        setupEventCards();
        console.log('GenAIsis website initialized successfully');
    } catch (error) {
        console.error('Error initializing website:', error);
    }
}

// ============================================================================
// NAVIGATION SYSTEM
// ============================================================================

// Navigation Setup
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navbar || !navToggle || !navMenu) {
        console.warn('Navigation elements not found');
        return;
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        const isActive = navMenu.classList.contains('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attributes
        navToggle.setAttribute('aria-expanded', !isActive);
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transform = !isActive 
                ? `rotate(${index === 0 ? '45deg' : index === 1 ? '0deg' : '-45deg'})` 
                : 'rotate(0deg)';
            if (index === 1) {
                span.style.opacity = !isActive ? '0' : '1';
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', debounce(updateActiveNavigation, 10));
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============================================================================
// MAGICAL CURSOR SYSTEM
// ============================================================================

// Magical Cursor System
function setupMagicalCursor() {
    const cursor = document.getElementById('magical-cursor');
    const trail = document.getElementById('cursor-trail');
    
    if (!cursor || !trail) {
        console.warn('Cursor elements not found');
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    // Update cursor position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Animate trail
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Cursor hover effects
    const interactiveElements = document.querySelectorAll('a, button, .event-card, .about-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'radial-gradient(circle, #f59e0b, rgba(245, 158, 11, 0.3))';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, #fbbf24, transparent)';
        });
    });
}

// ============================================================================
// PARTICLE SYSTEM
// ============================================================================

// Particle System
function setupParticleSystem() {
    const particleContainer = document.getElementById('particle-container');
    
    if (!particleContainer) {
        console.warn('Particle container not found');
        return;
    }
    
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    
    container.appendChild(particle);
    
    // Remove and recreate after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, 8000);
}

// ============================================================================
// COUNTDOWN TIMER
// ============================================================================

// Countdown Timer
function setupCountdownTimer() {
    const targetDate = new Date('August 30, 2025 09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            console.warn('Countdown elements not found');
            return;
        }
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        } else {
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================================================
// SCROLL EFFECTS AND ANIMATIONS
// ============================================================================

// Scroll Effects and Animations
function setupScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.about-card, .event-card, .timeline-content, .acceptance-letter, .coordinators-card, .transport-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Remove parallax effect to prevent overlapping
    // The parallax effect was causing sections to move and overlap
    // We'll keep only the fade-in animations for better performance
}

// ============================================================================
// EVENT CARDS ENHANCEMENT
// ============================================================================

// Event Data
const eventsData = {
    'mystic-morphs': {
        title: 'Mystic Morphs',
        icon: '🦄',
        description: 'A magical transformation challenge that tests your creativity and teamwork. Participants will be given a series of objects that they must transform into something new and innovative using their imagination and problem-solving skills. The most creative and well-executed transformations will win magical prizes!',
        teamSize: '3 members',
        duration: '2 hours',
        location: 'Transfiguration Courtyard',
        date: 'Day 1 - 10:00 AM',
        prizes: '1st: ₹10,000 | 2nd: ₹7,000 | 3rd: ₹5,000',
        rules: [
            'Each team must consist of exactly 3 members',
            'All transformations must be original work created during the event',
            'No dangerous or harmful transformations allowed',
            'Judges\' decisions are final',
            'Teams have 10 minutes to present their transformation',
            'All materials will be provided'
        ],
        coordinator: {
            name: 'Prof. Minerva McGonagall',
            email: 'minerva.mcgonagall@genaisis.edu',
            phone: '+91 98765 43210',
            avatar: 'MM'
        }
    },
    'portraits-perception': {
        title: 'Portraits of Perception',
        icon: '😶‍🌫️',
        description: 'A visual puzzle event where perception and observation are everything. Teams will be presented with enchanted portraits that contain hidden messages, optical illusions, and visual puzzles. Use your keen eye and logical reasoning to decipher the secrets within the magical frames.',
        teamSize: '4 members',
        duration: '1.5 hours',
        location: 'Enchanted Gallery',
        date: 'Day 1 - 2:00 PM',
        prizes: '1st: ₹12,000 | 2nd: ₹8,000 | 3rd: ₹5,000',
        rules: [
            'Teams of 4 members maximum',
            'No electronic devices allowed',
            'All answers must be submitted on the provided parchment',
            'No communication with other teams',
            'The first team to solve all puzzles wins',
            'In case of a tie, the team that finished first wins'
        ],
        coordinator: {
            name: 'Firenze',
            email: 'firenze@genaisis.edu',
            phone: '+91 98765 43211',
            avatar: 'FZ'
        }
    },
    'azkaban-escape': {
        title: 'Azkaban Escape',
        icon: '🏰',
        description: 'A thrilling escape room event inspired by the magical world of Azkaban. Your team has been wrongfully imprisoned and must work together to solve magical puzzles, decode ancient runes, and escape before the Dementors find you. This is a test of logic, teamwork, and magical knowledge under pressure.',
        teamSize: '2-3 members',
        duration: '2 hours',
        location: 'Dungeon 3',
        date: 'Day 2 - 11:00 AM',
        prizes: '1st: ₹15,000 | 2nd: ₹10,000 | 3rd: ₹7,000',
        rules: [
            'Teams of 2-3 members',
            'No outside help or materials',
            'Follow all instructions from the moderators',
            'No damaging the escape room props',
            'The fastest escape time wins',
            'In case of a tie, the team that used fewer hints wins'
        ],
        coordinator: {
            name: 'Sirius Black',
            email: 'padfoot@genaisis.edu',
            phone: '+91 98765 43212',
            avatar: 'SB'
        }
    },
    'triwizard-challenge': {
        title: 'Triwizard Challenge',
        icon: '⚔️',
        description: 'A multi-stage event inspired by the legendary Triwizard Tournament. Teams will face three magical challenges testing their courage, intelligence, and magical abilities. Only the most skilled and resourceful wizards will emerge victorious in this ultimate test of magical prowess.',
        teamSize: '3 members',
        duration: '3 hours',
        location: 'Champions Arena',
        date: 'Day 3 - 3:00 PM',
        prizes: '1st: ₹20,000 | 2nd: ₹15,000 | 3rd: ₹10,000',
        rules: [
            'Teams of exactly 3 members',
            'No dangerous spells or curses allowed',
            'All challenges must be completed in order',
            'Judges\' decisions are final',
            'Safety equipment must be worn at all times',
            'Disqualification for any form of cheating'
        ],
        coordinator: {
            name: 'Alastor "Mad-Eye" Moody',
            email: 'mad.eye@genaisis.edu',
            phone: '+91 98765 43213',
            avatar: 'AM'
        }
    },
    'gringotts-innovation': {
        title: 'Gringotts Innovation Vault',
        icon: '💎',
        description: 'A treasure hunt for the most innovative minds, inspired by Gringotts Bank. Teams must navigate through a series of magical vaults, each containing a unique challenge that tests their problem-solving, creativity, and magical knowledge. The team that can unlock the most vaults with the most innovative solutions will claim the grand prize!',
        teamSize: '2 members',
        duration: '1.5 hours',
        location: 'Innovation Hall',
        date: 'Day 3 - 10:30 AM',
        prizes: '1st: ₹18,000 | 2nd: ₹12,000 | 3rd: ₹8,000',
        rules: [
            'Teams of 2 members',
            'No outside materials allowed',
            'All solutions must be original work',
            'Vaults must be completed in sequence',
            'Time penalties for incorrect attempts',
            'The team with the most points wins'
        ],
        coordinator: {
            name: 'Bill Weasley',
            email: 'bill.weasley@genaisis.edu',
            phone: '+91 98765 43214',
            avatar: 'BW'
        }
    }
};

// Event Cards Enhancement
function setupEventCards() {
    const eventCards = document.querySelectorAll('.event-card');
    const modal = document.getElementById('eventModal');
    const closeModal = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Add click handlers to event cards and buttons
    eventCards.forEach(card => {
        const eventId = card.getAttribute('data-event');
        const learnMoreBtn = card.querySelector('.event-button');
        
        // Handle card click (for the entire card)
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link or button inside the card
            if (e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            if (eventId && eventsData[eventId]) {
                openEventModal(eventsData[eventId]);
                createMagicalBurst(this);
            }
        });
        
        // Handle Learn More button click
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click from firing
                if (eventId && eventsData[eventId]) {
                    openEventModal(eventsData[eventId]);
                    createMagicalBurst(card);
                }
            });
        }
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(251, 191, 36, 0.6), inset 0 0 30px rgba(251, 191, 36, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Close modal when clicking the close button or overlay
    if (closeModal) {
        closeModal.addEventListener('click', closeEventModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeEventModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEventModal();
        }
    });
}

// Open event modal with data
function openEventModal(eventData) {
    const modal = document.getElementById('eventModal');
    if (!modal) return;
    
    // Populate modal with event data
    const modalContent = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-icon">${eventData.icon}</div>
                <h2 class="modal-title">${eventData.title}</h2>
                <button class="close-modal" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="event-description">
                    <p>${eventData.description}</p>
                </div>
                
                <div class="event-details">
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>Team: <strong>${eventData.teamSize}</strong></span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-clock"></i>
                        <span>Duration: <strong>${eventData.duration}</strong></span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Location: <strong>${eventData.location}</strong></span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-calendar-alt"></i>
                        <span>Date & Time: <strong>${eventData.date}</strong></span>
                    </div>
                    <div class="detail-item prizes">
                        <i class="fas fa-trophy"></i>
                        <span>Prizes: <strong>${eventData.prizes}</strong></span>
                    </div>
                </div>
                
                <div class="event-rules">
                    <h3><i class="fas fa-scroll"></i> Rules & Guidelines</h3>
                    <ul>
                        ${eventData.rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="event-coordinator">
                    <h3><i class="fas fa-user-tie"></i> Event Coordinator</h3>
                    <div class="coordinator-card">
                        <div class="coordinator-avatar">${eventData.coordinator.avatar}</div>
                        <div class="coordinator-info">
                            <h4>${eventData.coordinator.name}</h4>
                            <div class="coordinator-contact">
                                <a href="mailto:${eventData.coordinator.email}">
                                    <i class="fas fa-envelope"></i> ${eventData.coordinator.email}
                                </a>
                                <a href="tel:${eventData.coordinator.phone}">
                                    <i class="fas fa-phone"></i> ${eventData.coordinator.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <a href="https://forms.gle/W15XosJ5qzrWvwKG8" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <i class="fas fa-user-plus"></i> Register Now
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Set modal content and show it
    modal.innerHTML = modalContent;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    modal.classList.add('active');
    
    // Add close button event listener
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeEventModal);
    }
}

// Close event modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        
        // Small delay before removing content for smoother transition
        setTimeout(() => {
            modal.innerHTML = '';
        }, 300);
    }
}

// Create magical burst effect
function createMagicalBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'magical-spark';
        spark.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #fbbf24;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(spark);
        
        const angle = (i * 30) * Math.PI / 180;
        const distance = 100 + Math.random() * 50;
        const duration = 0.8 + Math.random() * 0.4;
        
        spark.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (spark.parentNode) {
                document.body.removeChild(spark);
            }
        };
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Utility function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Performance optimization - debounce function
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

// ============================================================================
// STYLES INJECTION
// ============================================================================

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .about-card, .event-card, .timeline-content, .acceptance-letter, .coordinators-card, .transport-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .nav-link.active {
        color: #fbbf24 !important;
        text-shadow: 0 0 10px #fbbf24 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// ============================================================================
// LOADING EFFECTS
// ============================================================================

// Add magical loading effect
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Create initial magical effect
    setTimeout(() => {
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle) {
            createMagicalBurst(mainTitle);
        }
    }, 500);
});