const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('active'); // animate burger
  navLinks.classList.toggle('active'); // show menu
  document.body.classList.toggle('menu-open'); // optional overflow fix
});

// Close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});



document.querySelectorAll('.field input, .field textarea').forEach(input => {
    input.addEventListener('blur', () => {
      const error = input.nextElementSibling;

      if (input.hasAttribute('required') && !input.value.trim()) {
        error.style.display = 'block';
      } else {
        error.style.display = 'none';
      }
    });
  });

   


