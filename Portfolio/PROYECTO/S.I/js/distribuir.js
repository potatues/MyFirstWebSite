$(document).ready(function(){

$("#add").click(function(){
// Obtenemos el numero de columnas (td) que tiene la primera fila
// (tr) del id "tabla"
var tds=$("#tabla tr:first td").length;
// Obtenemos el total de filas (tr) del id "tabla"
var trs=$("#tabla tr").length;
var nuevaFila="<tr>";
cant = $('#contador-filas').val();
cant++;
$('#contador-filas').val(cant)
nuevaFila+="<td></td>"+
"<td><p></p></td>"+
"<td><p> </p></td>"+
"<td><p> </p></td>"+
"<td> <button class='btn btn-danger borrar'><i class='fa fa-trash'></i></button> <button class='btn btn-warning editar'><i class='fa fa-pencil'></i></button> </td>";

nuevaFila+="</tr>";
$("#tabla").append(nuevaFila);
});


});


// // ----------------------------borrar-----------------
$(function () {
    $(document).on('click', '.borrar', function (event) {
    	 swal({
                title: "Borrado con éxito!",
				  // text: "-----------------",
				  icon: "success",
				  button: "Aceptar",
                });
        event.preventDefault();
        $(this).closest('tr').remove();
    });


});
// // ----------------------------editar------------
$(function () {
    $(document).on('click', '.editar', function (event) {
        event.preventDefault();
        $(this).closest('tr').hide();


        var tds=$("#tabla tr:last td").length;
// Obtenemos el total de filas (tr) del id "tabla"
			var trs=$("#tabla tr:last").length;
			var nuevaFila="<tr>";
			cant = $('#contador-filas').val();

			$('#contador-filas').val(cant)
			nuevaFila+= "<td><select class='form-control' id='exampleFormControlSelect1'><option>Chorizo mixto crudo</option><option>Chorizo especial crudo</option><option>Chorizo de cerdo precocido</option><option>Chorizo PAISAX6</option><option>Chorizo ternera</option><option>Chorizo de pollo</option><option>Hamburguesa de res</option><option>Hamburguesa de pollo</option><option>Hamburguesa de cerdo</option><option>Jamón de cerdo</option><option>Jamón de Sandwich</option><option>Jamón ranchero</optio></select></td>"+
		"<td><input class='form-control' type='number' placeholder='20'/></td>"+
		"<td><input class='form-control' type='text' placeholder='111102'/></td>"+
		"<td><select class='form-control' id='exampleFormControlSelect1'><option>1. Suba : Calle 12 A # 93-05</option><option>2. Paloquemado : Av calle 19 # 22-38</option><option>3. Galán : Cra 56 # 4G 86</option><option>4. Guadalupe : Autopista sur # 62 a 16</option><option>5. Codabas : Cra 7 # 180-75 Local 25 modulo 5</option></select></td>"+
		"<td> <button class='btn btn-danger borrar' style='cursor: pointer;'><i class='fa fa-trash'></i></button> <button class='btn btn-warning editar' style='cursor: pointer;'><i class='fa fa-pencil'></i></button> </td>";

			// Añadimos una columna con el numero total de columnas.
			// Añadimos uno al total, ya que cuando cargamos los valores para la
			// columna, todavia no esta añadida
			nuevaFila+="</tr>";
			$("#tabla").append(nuevaFila);
    });

});

// guardar-------------------------------------------------

$(document).ready(function(){
	$('.guardar').click(function(){

		swal({
                title: "Guardado con éxito!",
				  icon: "success",
				  button: "Aceptar",
                });
	
	});


});

