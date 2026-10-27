// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const dropdowns = document.querySelectorAll('.nav-dropdown');
const backdrop = document.querySelector('.nav-backdrop');
const isMobile = () => window.innerWidth <= 768;

function openMenu() {
  nav?.classList.add('open');
  menuToggle?.setAttribute('aria-expanded', 'true');
  backdrop?.classList.add('visible');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  backdrop?.classList.remove('visible');
  document.body.classList.remove('menu-open');
}

// Close mobile dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (isMobile()) return;
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// Handle resize: close mobile menu if screen widened
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

// Close menu when clicking the backdrop
backdrop?.addEventListener('click', closeMenu);

// Close menu on link click (non-dropdown links)
nav?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.parentElement.classList.contains('nav-dropdown')) {
      if (isMobile()) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    } else {
      closeMenu();
    }
  });
});

// Touch-friendly: prevent double-tap zoom on dropdown links (desktop only)
if (!isMobile()) {
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector(':scope > .nav-link');
    if (link && !link.hasAttribute('data-touch-listener')) {
      link.setAttribute('data-touch-listener', 'true');
      link.addEventListener('touchstart', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }, { passive: false });
    }
  });
}

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  header?.classList.toggle('scrolled', currentScroll > 10);
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .case-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
