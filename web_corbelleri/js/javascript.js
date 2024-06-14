document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var email = document.getElementById('email').value.trim();
        var mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !apellido || !email || !mensaje) {
            event.preventDefault();
            alert('Por favor, completa todos los campos.');
        }

        if (email.indexOf('@') === -1) {
            event.preventDefault();
            alert('El campo de correo electrónico debe contener "@".');
        }
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
    } else {
    }
});
