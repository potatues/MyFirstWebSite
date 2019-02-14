function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
  
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
 var numero=document.getElementById("number"+no);
 var correo=document.getElementById("email"+no);
 var codigo=document.getElementById("codigo"+no);
  
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
 var numero_data=numero.innerHTML;
 var correo_data=correo.innerHTML;
 var codigo_data=codigo.innerHTML;
  
 name.innerHTML="<input type='text' class='form-control' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' class='form-control'  id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' class='form-control'  id='age_text"+no+"' value='"+age_data+"'>";
 numero.innerHTML="<input type='text' class='form-control'  id='numero_text"+no+"' value='"+numero_data+"'>";
 correo.innerHTML="<input type='text' class='form-control'  id='correo_text"+no+"' value='"+correo_data+"'>";
 codigo.innerHTML="<input type='number' class='form-control'  id='codigo_text"+no+"' value='"+codigo_data+"'>";

}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;
 var numero_val=document.getElementById("numero_text"+no).value;
 var correo_val=document.getElementById("correo_text"+no).value;
 var codigo_val=document.getElementById("codigo_text"+no).value;
 swal({
  title: "¿Esta seguro de realizar los cambios?",
  text: "",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Cambios realizados con éxito.", {
      icon: "success",
    });
  document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;
 document.getElementById("number"+no).innerHTML=numero_val;
 document.getElementById("email"+no).innerHTML=correo_val;
 document.getElementById("codigo"+no).innerHTML=codigo_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
  } else {
    swal("Cambios cancelados.");
  }

});


}

function delete_row(no)
{
  swal({
  title: "¿Estás seguro?",
  text: "Una vez realizao, no hay vuelta atrás.",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Borrado con éxito.", {
      icon: "success",
    });
     document.getElementById("row"+no+"").outerHTML="";
  } else {
    swal("Cambios cancelados","","error");
  }
});

}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
 var new_numero=document.getElementById("new_numero").value;
 var new_correo=document.getElementById("new_correo").value;
 var new_codigo=document.getElementById("new_codigo").value;

  
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td id='number"+table_len+"'>"+new_numero+"</td><td id='email"+table_len+"'>"+new_correo+"</td><td id='number"+table_len+"'>"+new_numero+"</td><td id='codigo"+table_len+"'>"+new_codigo+"</td><td>  <img class='kl-b-2 kl-shine kl-spin delete' src='../../img/recycle-bin.png' onclick='delete_row("+table_len+")' style='cursor: pointer;' width='30' height='30'> <img class='kl-b-2 kl-shine kl-spin edit' src='../../img/wrench.png' id='edit_button"+table_len+"' style='cursor: pointer;' onclick='edit_row("+table_len+")'  width='30' height='30'><img class='kl-b-2 kl-shine kl-spin save' src='../../img/save.png' id='save_button"+table_len+"' style='cursor: pointer;' onclick='save_row("+table_len+")' width='25' height='25'> </td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
 document.getElementById("new_numero").value="";
 document.getElementById("new_correo").value="";
 document.getElementById("new_codigo").value="";
}





