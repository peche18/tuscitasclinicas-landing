function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  var burger = document.getElementById('hamburger');
  var isOpen = menu.classList.toggle('open');
  if (burger) burger.classList.toggle('open', isOpen);
}

document.addEventListener('click', function(e) {
  var nav = document.getElementById('navbar');
  if (!nav.contains(e.target)) {
    document.getElementById('mobileMenu').classList.remove('open');
    var burger = document.getElementById('hamburger');
    if (burger) burger.classList.remove('open');
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
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

function toggleFaq(btn) {
  var item = btn.parentElement;
  var isOpen = item.classList.contains('faq-open');
  document.querySelectorAll('.faq-item.faq-open').forEach(function(el) { el.classList.remove('faq-open'); });
  if (!isOpen) item.classList.add('faq-open');
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(function(el) { el.textContent = ''; });
  document.querySelectorAll('.input-error').forEach(function(el) { el.classList.remove('input-error'); });
}

function showError(fieldId, errorId, msg) {
  var field = document.getElementById(fieldId);
  var err = document.getElementById(errorId);
  if (field) field.classList.add('input-error');
  if (err) err.textContent = msg;
}

document.querySelectorAll('#contactForm input').forEach(function(input) {
  input.addEventListener('input', function() {
    this.classList.remove('input-error');
    var errId = 'error-' + this.id;
    var err = document.getElementById(errId);
    if (err) err.textContent = '';
  });
});

function handleSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var nombre = form.nombre.value.trim();
  var clinica = form.clinica.value.trim();
  var email = form.email.value.trim();

  clearErrors();
  var valid = true;

  if (!nombre) { showError('nombre', 'error-nombre', 'Campo obligatorio'); valid = false; }
  if (!clinica) { showError('clinica', 'error-clinica', 'Campo obligatorio'); valid = false; }
  if (!email) {
    showError('email', 'error-email', 'Campo obligatorio'); valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'error-email', 'Introduce un email válido'); valid = false;
  }

  if (!valid) return;

  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}
