(function() {
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY", // replace with your actual public key
  });
})();

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Message sent successfully!');
      contactForm.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.log('FAILED...', error);
    });
});
