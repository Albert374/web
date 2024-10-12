document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('clcXbpntO9q4ne1tt'); // Reemplaza con tu User ID de EmailJS

    const form = document.getElementById('registroForm');
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    const mensajeError = document.getElementById('mensaje-error');
    const seccionRegistro = document.getElementById('registro');
    const seccionPrincipal = document.getElementById('pantallaPrincipal');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capturar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;

        // Enviar el formulario a través de EmailJS
        emailjs.send('service_n0toocd', 'template_avf7ioc', {
            nombre: nombre,
            telefono: telefono
        }).then(function (response) {
            mensajeEnviado.style.display = 'block'; // Mostrar mensaje de éxito
            form.reset(); // Limpiar el formulario después de enviarlo

            // Ocultar la sección de registro y mostrar la página principal
            seccionRegistro.style.display = 'none';
            seccionPrincipal.style.display = 'block';

        }, function (error) {
            mensajeError.style.display = 'block'; // Mostrar mensaje de error
        });
    });
});
