
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
var password=document.login.password.value; 

if (usuario=="admin@gmail.com" && password=="123") { 
window.location='adminwe.html'
 }else  
if (usuario=="contador@gmail.com" && password=="123") { 
window.location='contadorwe.html'; 
 } else
if (usuario=="vendedor@gmail.com" && password=="123") { 
window.location='vendedorwe.html'; 
 } else
if (usuario=="cliente@gmail.com" && password=="123") { 
window.location='clientewe.html'; 
 } else
if (usuario=="" && password=="") {
  swal("¡No ha sido posible el acceso!", "Tiene que escribir su correo y contraseña", "error");
 } else {
  swal("¡No ha sido posible el acceso!", "Los campos ingresados no son correctos", "error");
 }
}