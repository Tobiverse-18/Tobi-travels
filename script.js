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