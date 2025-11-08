(function() {
  emailjs.init({
    publicKey: "kjuZxbjYShK4ij5O6", // replace with your actual public key
  });
})();

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_hx5pppd', 'template_m8di6lj', this)
    .then(() => {
      alert('Message sent successfully!');
      contactForm.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.log('FAILED...', error);
    });
});
