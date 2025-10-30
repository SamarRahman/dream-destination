// Smooth scroll for navbar links
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active navbar link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, .section2');
  const navLinks = document.querySelectorAll('.navbar ul li a');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('class');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (current && link.textContent.toLowerCase().includes(current.split(' ')[0])) {
      link.classList.add('active');
    }
  });
});

// Animate cards on scroll
const cards = document.querySelectorAll('.card, .card2');
const animateCards = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('show');
    }
  });
};
window.addEventListener('scroll', animateCards);
window.addEventListener('load', animateCards);

// Open social links in new tab
document.querySelectorAll('.socal a').forEach(link => {
  link.setAttribute('target', '_blank');
});