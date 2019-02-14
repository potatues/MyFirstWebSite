
   // -------------------popover---

$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})




  function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
// var password=document.login.password.value; 

if (usuario=="admin@gmail.com") { 
swal("Enviado con éxito!", "La confirmación de cambio de contraseña ha sido enviada a tu correo", "success"); 
 }else  
if (usuario=="contador@gmail.com") { 
swal("Enviado con éxito!", "La confirmación de cambio de contraseña ha sido enviada a tu correo", "success");
 } else
if (usuario=="vendedor@gmail.com") { 
winswal("Enviado con éxito!", "La confirmación de cambio de contraseña ha sido enviada a tu correo", "success");
 } else
if (usuario=="cliente@gmail.com") { 
	swal("Enviado con éxito!", "La confirmación de cambio de contraseña ha sido enviada a tu correo", "success");
 } else
if (usuario=="") {
  swal("¡Llene los campos correctamente!", "Escriba el correo con el que esta registrado", "error");
 } else {
  swal("¡El correo ingresado no existe!", "Digite el correo con el que se registro", "error");
 }
}