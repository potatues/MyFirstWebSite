function valida () {
	var usuario  = $('#correo').val();
	var password = $ ('#pass').val();

	console.log(usuario);
	console.log(password);

	if(usuario == "adm@gmail.com" && password == "123") {
		alert('Bienvenido admin');
		window.location= '../../adminFinal.html';

	} else if (usuario == "cliente@gmail.com" && password == "123"){

		alert('Bienvenido cliente');
		window.location.href = '../../4. cliente.html';
	}else if (usuario == "vendedor@gmail.com" && password == "123"){

		alert('Bienvenido Vendedor');
		window.location.href = '../../3. vendedor.html';
	}
	else if (usuario == "contador@gmail.com" && password == "123"){

		alert('Bienvenido contador');
		window.location.href = '../../2. contador.html';
	}



	else{
swal("Good job!", "You clicked the button!", "success");
	}
	

}

