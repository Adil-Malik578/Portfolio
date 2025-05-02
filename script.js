document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Message sent successfully!';
  this.reset();
});
