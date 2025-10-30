// Animate contact cards on scroll
const cards = document.querySelectorAll('.contact-cards .card');
function showCardsOnScroll() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);

// Open social links in new tab
document.querySelectorAll('.socal a').forEach(link => {
  link.setAttribute('target', '_blank');
});

// Contact form validation and feedback
const form = document.querySelector('.contact-container form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    let error = '';

    if (name.length < 2) error = 'Please enter your full name.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = 'Please enter a valid email address.';
    else if (message.length < 10) error = 'Please enter a message (at least 10 characters).';

    let feedback = form.querySelector('.form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'form-feedback';
      form.appendChild(feedback);
    }

    if (error) {
      feedback.textContent = error;
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Thank you for contacting us! We will get back to you soon.';
      feedback.style.color = 'green';
      form.reset();
    }
  });
}