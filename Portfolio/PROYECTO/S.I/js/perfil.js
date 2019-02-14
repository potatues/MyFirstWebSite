$(document).ready(function () {
	$('#name1-1').hide();
	$('#descrip').hide();
	$('#cargo').hide();
	$('#correos').hide();
	$('#telefonos').hide();
	// body...
	$('#pincel1').click(function () {
		// body...
		$('#name1').hide();
		$('#name1-1').show();
	});
	$('#pincel2').click(function(){
		$('#descripsi').hide();
		$('#descrip').show();
	});
	$('#pincel3').click(function(){
		$('#cargos').hide();
		$('#cargo').show();
	});
	$('#pincel4').click(function(){
		$('#correo').hide();
		$('#correos').show();
	});
	$('#pincel5').click(function(){
		$('#telefono').hide();
		$('#telefonos').show();
	});
	$('#saveperfil').click(function(){
		swal({
			  title: "¡Buen trabajo!",
			  text: "Tu perfil se ha actualizado con éxito",
			  icon: "success",
			  button: "Genial!",
			});
		window.location='../5. perfil/perfil.html';
		});

	$('#cancelar').click(function(){
		swal({
			  title: "¿Estás seguro?",
			  text: "Todos los cambios realizados se perderán.",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
			    swal("Actualización cancelada", {
			      icon: "success",
			    });
			    window.location='../5. perfil/editarperfil.html';
			  } else {
			    swal("¡Aún puedes seguir editando tu perfil!");
			  }
			});
	});
});