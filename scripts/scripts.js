document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombre = this.nombre.value;
    var telefono = this.telefono.value;

    console.log('Nombre:', nombre);
    console.log('Teléfono:', telefono);
    
    alert('Datos capturados. Revisa la consola para verlos.');
    
    document.getElementById('registro').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
});
