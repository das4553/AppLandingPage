// Initialize EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // replace with your key
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.disabled = true;
  button.textContent = "Sending...";
  status.textContent = "";

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",   // replace
      "YOUR_TEMPLATE_ID",  // replace
      this
    )
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    })
    .catch(() => {
      status.textContent = "❌ Something went wrong. Please try again.";
      status.style.color = "red";
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = "Send Message";
    });
});
