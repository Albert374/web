<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);

    $to = 'likenice12@gmail.com'; 
    $subject = 'Nuevo registro en 5N Equipo N. 3';
    $message = "Nombre: $nombre\nTeléfono: $telefono";
    $headers = 'From: no-reply@tu-dominio.com' . "\r\n" .
               'Reply-To: no-reply@tu-dominio.com';

    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
