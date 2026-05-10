document.addEventListener('DOMContentLoaded', function() {
    var yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    var navLinks = document.querySelectorAll('nav a');
    var currentPage = location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    var mensajeField = document.getElementById('mensaje');
    var charCount = document.querySelector('.char-count');

    if (mensajeField && charCount) {
        mensajeField.addEventListener('input', function() {
            var length = this.value.length;
            if (length > 500) {
                this.value = this.value.substring(0, 500);
                length = 500;
            }
            charCount.textContent = length + ' / 500';
        });
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('nombre').value.trim();
        var email = document.getElementById('email').value.trim();
        var servicio = document.getElementById('servicio').value;
        var mensaje = mensajeField ? mensajeField.value.trim() : '';
        var terminos = document.getElementById('terminos').checked;

        if (!name || !email || !servicio || !mensaje) {
            alert('Completa todos los datos para que podamos ayudarte.');
            return;
        }

        if (email.indexOf('@') === -1) {
            alert('El correo debe tener @, revisa ese dato.');
            return;
        }

        if (!terminos) {
            alert('Marca la casilla si quieres que te contactemos.');
            return;
        }

        var btn = contactForm.querySelector('button[type="submit"]');
        if (btn) {
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(function() {
                alert('¡Gracias! Te escribimos pronto.');
                contactForm.reset();
                if (charCount) {
                    charCount.textContent = '0 / 500';
                }
                btn.textContent = 'Enviar mensaje';
                btn.disabled = false;
            }, 1000);
        }
    });
});

// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle('show');
    
    // Cambia el ícono
    if (menuList.classList.contains('show')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

