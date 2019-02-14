let context  = document.getElementById("context");
let itemsContext = Array.from(context.querySelectorAll(".animation"));
let openNavigator = document.getElementById("openNavigator");
let navigator = document.getElementById("navigator");
let closeNavigator = document.getElementById("closeNavigator");

let navdesc = document.getElementById("nav-desc");
let navfoot = document.getElementById("nav-foot");
let arrowU = document.getElementById("arrowUp");

function findElementAnimation(element){

 let pageTop = window.pageYOffset;
   let topElement = element.getBoundingClientRect().top +20;
    if(topElement){
        element.classList.add("animation-to-top-2");
    }
}


openNavigator.addEventListener("click", function(){

    navigator.classList.toggle("navigator-animation-open");
    openNavigator.style.display ="none";
    arrowUp.style.display ="none";
    setTimeout(function(){
       },200);

});

closeNavigator.addEventListener("click", function() {
 navigator.classList.toggle("navigator-animation-close");

 openNavigator.style.display ="block";
 arrowU.style.display ="block";


    setTimeout(function(){     
       
        navigator.classList.toggle("navigator-animation-open");
        navigator.classList.toggle("navigator-animation-close");
     }, 400);
});

document.addEventListener("scroll", function(){
    if(window.pageYOffset > 200){
          
        openNavigator.classList.add("bars-bg");
    }else{
        openNavigator.classList.remove("bars-bg");
    }

    let elementsContext = itemsContext.map(a => findElementAnimation(a));


});

