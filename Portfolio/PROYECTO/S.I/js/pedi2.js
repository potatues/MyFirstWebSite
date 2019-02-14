
$(document).ready(function(){
  var current = 1,current_step,next_step,steps;
  steps = $("fieldset").length;
  $(".next").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().next();
    next_step.show();
    current_step.hide();
    setProgressBar(++current);
  });
  $(".previous").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().prev();
    next_step.show();
    current_step.hide();
    setProgressBar(--current);
  });
  setProgressBar(current);
  // Change progress bar action
  function setProgressBar(curStep){
    var percent = parseFloat(50 / steps) * curStep;
    percent = percent.toFixed();
    $(".barrapedido1")
      .css("width",percent+"%")
      .html(percent+"%");   
  }
});
$(document).ready(function(){

  setProgressBar(current);
  // Change progress bar action
  function setProgressBar(curStep){
    var percent = parseFloat(50 / steps) * curStep;
    percent = percent.toFixed();
    $(".barrafinal")
      .css("width",percent+"%")
      .html(percent+"%");   
  }
});


function Valida() 
 {
  
  params = Valida.arguments;
  f = params[0];
  for (var i = 1, total = params.length; i < total; i++) 
   {
    if (f[params[i]].value == "" ||  f[params[i]].value <1)
     {
    swal("¡El pedido no ha podido generarse!", "Complete todos los campos", "warning");
      // alert("debe rellenar el campo: " );
      // f[params[i]].focus();
      return false;
     } else {
      location.href='../2. pedido/pedido1.1.html';

      // swal("Good job!", "You clicked the button!", "success");

      

     }
    
     } 

   }

   // -------------------popover---

$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})


// -----------------pedigenerados-----------------
function alertita() {
  swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
}

