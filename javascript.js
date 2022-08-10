function mostrarDatos(){
    var nombre=document.getElementById('txt_nombres').value;
    var apellido=document.getElementById('txt_apellidos').value;
    var telefono=document.getElementById('txt_telefono').value;
    var correo=document.getElementById('txt_correo').value;
    var fechaNac=document.getElementById('txt_fn').value;
    var mensaje=document.getElementById('txt_mensaje').value;
    var alerta=nombre+'\n'+apellido+'\n'+telefono+'\n'+correo+'\n'+fechaNac+'\n'+mensaje;
    alert(alerta);

}