document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombre = this.nombre.value;
    let edad = this.edad.value;
    let email = this.email.value;


    console.log('Nombre:', nombre);
    console.log('edad:', edad);
    console.log('email:', email);

    
    alert('Datos capturados. Revisa la consola para verlos.');
    
    document.getElementById('registro').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
});

function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}
