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