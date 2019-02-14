function validar(){
	var usuario, password ;

	usuario = document.getElementById(usuario);
	password = document.getElementById(password);

	if (usuario ==="" || password ==="") {
		alert("El campo no fue  correctamente")
		return false;
	}

}