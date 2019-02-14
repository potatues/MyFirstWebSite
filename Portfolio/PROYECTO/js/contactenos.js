
function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var correo=document.login.corre.value; 
var telefono=document.login.telefono.value; 
var quietud=document.login.quietud.value; 

 if (usuario=="" || correo=="" || telefono=="" || quietud==""){ 
swal("Llene todos los campos", "Tiene que llenar todos los campos para enviar la solicitud", "error"); 
return false;
 }else {
	swal("Solicitud enviada con éxito", "¡Será respondida lo más pronto posible!", "success");
	return true;  	
 }  

}

