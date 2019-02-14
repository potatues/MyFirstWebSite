
$(document).ready(function () {

$('#validate').click(function() {
  var opcion =$('#options').val().trim();
  var numberi =$('#canti1').val().trim();

    if (opcion==='' || numberi<1) {
       swal("No se puede añadir al carrito", "No ha llenado los campos correctamente", "warning");

    } else {
        swal("¡Felicidades!", "Se ha añadido al carrito correctamente", "success");
         frm=document.forms[0];
        frm.sigue.disabled=false;
    }

    //   if ($('#canti1').val().trim() <1) {
    //     alert('No es una cantidad valida');

    // } else {
  

    //     alert('Cantidad correcta');

    // }

});
$('#validate2').click(function() {
  var opcion =$('#options2').val().trim();
  var numberi =$('#canti2').val().trim();

    if (opcion==='' || numberi<1) {
        swal("No se puede añadir al carrito", "No ha llenado los campos correctamente", "warning");

    } else {
          swal("¡Felicidades!", "Se ha añadido al carrito correctamente", "success");
         frm=document.forms[0];
        frm.sigue.disabled=false;
    }



});
$('#validate3').click(function() {
  var opcion =$('#options3').val().trim();
  var numberi =$('#canti3').val().trim();

    if (opcion==='' || numberi<1) {
        swal("No se puede añadir al carrito", "No ha llenado los campos correctamente", "warning");

    } else {
        swal("¡Felicidades!", "Se ha añadido al carrito correctamente", "success");
         frm=document.forms[0];
        frm.sigue.disabled=false;
    }



});
$('#validate4').click(function() {
  var opcion =$('#options2').val().trim();
  var numberi =$('#canti2').val().trim();

    if (opcion==='' || numberi<1) {
        swal("No se puede añadir al carrito", "No ha llenado los campos correctamente", "warning");

    } else {
         swal("¡Felicidades!", "Se ha añadido al carrito correctamente", "success");
         frm=document.forms[0];
        frm.sigue.disabled=false;
    }



});


$('#porfin').click(function(){
var suma = 0;
var checks = document.getElementsByName('ids');
for (var i = 0, j = checks.length; i < j; i++) {
    if(checks[i].checked == true){
    suma++;
    }
}
 
if(suma == 0){
   swal({
  title: "No hay cambios para guardar",
  text: "Realize alguna modificación",
  icon: "warning",
  button: "De acuerdo!",
});
    return false;
}else {
swal({
  title: "¿Estás completamente seguro?",
  text: "Una vez realizado el cambio, no hay vuelta atrás.",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("¡Cambios guardados con éxito!", {
      icon: "success",
    });
    window.location.href='../2. pedido/pedidogeneradoal.html' ;
  } else {
    swal("Los cambios han sido cancelados ");
  }
});
  return true;
}
 


//     if (document.getElementById('check1').checked==false) {
//       swal({
//   title: "No hay cambios para guardar",
//   text: "Realize alguna modificación",
//   icon: "warning",
//   button: "De acuerdo!",
// });
//       // alert('Marque minimo un campo');
//       // document.getElementById("check1").focus();
//       return false;

//     }else {
//       swal({
//   title: "¿Esta seguro que desea guardar cambios?",
//   text: "Once deleted, you will not be able to recover this imaginary file!",
//   icon: "warning",
//   buttons: true,
//   dangerMode: true,
// })
// .then((willDelete) => {
//   if (willDelete) {
//     swal("Poof! Your imaginary file has been deleted!", {
//       icon: "success",
//     });
//   } else {
//     swal("Your imaginary file is safe!");
//   }
// });
//       return true;
//     }


});

})