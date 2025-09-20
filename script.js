function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else{
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Animation

const items = document.querySelectorAll('.animate-right, .animate-left, .animate-flip-top, .animate-flip-bottom');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // fade in when visible
    } else {
      entry.target.classList.remove('show'); // fade out when not visible
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

// darkmode

const toggle = document.getElementById('darkModeToggle');

// Load saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Toggle dark mode on click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    toggle.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    toggle.textContent = '🌙';
  }
});

// Get the button
const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: toggle for dark/light mode
const toggleMode = document.getElementById("modeToggle"); // your existing mode toggle button
toggleMode?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// loader 

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Fade out loader
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 800); // wait for fade-out
  }, 2500); // loader stays ~2.5s before fading
});

// Typewriter effect
const words = ["Amazing Destinations", "Unforgettable Adventures", "Memories That Last", "Travel With Confidence"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 150;

function type() {
  currentWord = words[i];
  const typeSpan = document.getElementById("typewriter");

  if (isDeleting) {
    typeSpan.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, speed / 2);
    }
  } else {
    typeSpan.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);

// testimony slide 

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) {
      t.classList.add("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);

// faq section 
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});