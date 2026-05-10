function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var nav = document.getElementById('navbar');
  if (!nav.contains(e.target)) {
    document.getElementById('mobileMenu').classList.remove('open');
  }
});

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(function(el) {
  observer.observe(el);
});

window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 28px rgba(0,0,0,0.28)'
    : 'none';
});

function handleSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var nombre = form.nombre.value.trim();
  var clinica = form.clinica.value.trim();
  var email = form.email.value.trim();

  if (!nombre || !clinica || !email) {
    alert('Por favor, rellena los campos obligatorios: Nombre, Clínica y Email.');
    return;
  }

  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}
