/**
 * Dropdown Menu and Mobile Navigation Handler
 * Manages desktop dropdowns and mobile menu functionality
 * Includes keyboard navigation for accessibility
 */

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeDropdowns();
    initializeMobileMenu();
    setupAccessibility();
});

// ============================================
// DROPDOWN MENU FUNCTIONALITY
// ============================================

/**
 * Initialize all dropdown menus
 * Sets up event listeners for buttons and menu items
 */
function initializeDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        // Click handler for dropdown toggle
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdown(this);
        });

        // Keyboard handler for dropdown toggle
        toggle.addEventListener('keydown', function(e) {
            handleDropdownKeyboard(e, this);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    // Close dropdowns on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });
}

/**
 * Toggle a dropdown menu open/closed
 * @param {Element} toggle - The dropdown toggle button
 */
function toggleDropdown(toggle) {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    const menuId = toggle.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);

    if (!menu) return;

    // Close other dropdowns
    closeAllDropdowns();

    // Toggle current dropdown
    if (!isExpanded) {
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('active');
        // Focus first menu item for accessibility
        const firstLink = menu.querySelector('a');
        if (firstLink) {
            firstLink.focus();
        }
    } else {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
        toggle.focus();
    }
}

/**
 * Close all dropdown menus
 */
function closeAllDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
    });

    dropdownMenus.forEach(menu => {
        menu.classList.remove('active');
    });
}

/**
 * Handle keyboard navigation in dropdowns
 * @param {KeyboardEvent} e - The keyboard event
 * @param {Element} toggle - The dropdown toggle button
 */
function handleDropdownKeyboard(e, toggle) {
    const menuId = toggle.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);

    if (!menu) return;

    switch(e.key) {
        case 'Enter':
        case ' ':
            e.preventDefault();
            toggleDropdown(toggle);
            break;
        case 'ArrowDown':
            e.preventDefault();
            if (toggle.getAttribute('aria-expanded') === 'false') {
                toggleDropdown(toggle);
            } else {
                const firstLink = menu.querySelector('a');
                if (firstLink) firstLink.focus();
            }
            break;
        case 'ArrowUp':
            e.preventDefault();
            closeAllDropdowns();
            toggle.focus();
            break;
    }
}

/**
 * Setup keyboard navigation within dropdown menus
 */
function setupDropdownItemNavigation() {
    const dropdownLinks = document.querySelectorAll('.dropdown-link');

    dropdownLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            const menu = this.closest('.dropdown-menu');
            const links = Array.from(menu.querySelectorAll('a'));
            const currentIndex = links.indexOf(this);

            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    const nextLink = links[currentIndex + 1];
                    if (nextLink) nextLink.focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const prevLink = links[currentIndex - 1];
                    if (prevLink) {
                        prevLink.focus();
                    } else {
                        const toggle = menu.previousElementSibling;
                        if (toggle) toggle.focus();
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    const menuId = menu.id;
                    const toggleBtn = document.querySelector(`[aria-controls="${menuId}"]`);
                    if (toggleBtn) {
                        toggleBtn.setAttribute('aria-expanded', 'false');
                        menu.classList.remove('active');
                        toggleBtn.focus();
                    }
                    break;
            }
        });
    });
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

/**
 * Initialize mobile menu toggle
 */
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!mobileToggle || !mainNav) return;

    // Toggle button click handler
    mobileToggle.addEventListener('click', function() {
        const isActive = mobileToggle.classList.contains('active');

        if (!isActive) {
            mobileToggle.classList.add('active');
            mainNav.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
        } else {
            mobileToggle.classList.remove('active');
            mainNav.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu on nav link click
    const navLinks = mainNav.querySelectorAll('a, button');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Don't close if it's a dropdown toggle
            if (!this.classList.contains('dropdown-toggle')) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Handle dropdown toggles in mobile menu
    const mobileDropdownToggles = mainNav.querySelectorAll('.dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileDropdown(this);
        });
    });

    // Close mobile menu on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileToggle.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mainNav.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when screen size changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileToggle.classList.remove('active');
            mainNav.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            closeAllDropdowns();
        }
    });
}

/**
 * Toggle dropdown in mobile menu
 * @param {Element} toggle - The dropdown toggle button
 */
function toggleMobileDropdown(toggle) {
    const menuId = toggle.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);

    if (!menu) return;

    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    if (!isExpanded) {
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('active');
    } else {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
    }
}

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

/**
 * Setup additional accessibility features
 */
function setupAccessibility() {
    // Add skip-to-content functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Setup dropdown item navigation
    setupDropdownItemNavigation();

    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', function() {
        document.body.classList.add('keyboard-nav');
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Announce dynamic changes to screen readers
    announceToScreenReaders();
}

/**
 * Announce changes to screen readers
 */
function announceToScreenReaders() {
    // Create an announcement region if it doesn't exist
    let announcer = document.getElementById('announcer');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'announcer';
        announcer.className = 'sr-only';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(announcer);
    }
}

/**
 * Announce a message to screen readers
 * @param {string} message - The message to announce
 */
function announce(message) {
    const announcer = document.getElementById('announcer');
    if (announcer) {
        announcer.textContent = message;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if element is visible in viewport
 * @param {Element} el - The element to check
 * @returns {boolean} - True if visible, false otherwise
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 * @param {Element} el - The element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
function smoothScrollTo(el, offset = 0) {
    if (!el) return;
    const targetPosition = el.offsetTop - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ============================================
// ADDITIONAL ENHANCEMENTS
// ============================================

/**
 * Handle CTA button actions (placeholder for future integration)
 */
document.addEventListener('click', function(e) {
    // Book appointment button
    if (e.target.closest('[href="#book-appointment"]')) {
        announce('Opening booking form');
        // Integration point for booking system
    }

    // Pay bill button
    if (e.target.closest('[href="#pay-bill"]')) {
        announce('Opening payment portal');
        // Integration point for payment system
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy load images when they become visible (future enhancement)
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// LOG MESSAGE
// ============================================

console.log('C Fast Optometry - Website Ready ✓');
