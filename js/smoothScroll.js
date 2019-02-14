
function smoothScroll(targe, duration){
    let target = document.querySelector(targe);
    let positionTarget = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = positionTarget - startPosition;
    let startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);   
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d;
        return c*t*t + b;
    };
    
    requestAnimationFrame(animation);

}
let arrowUp = document.getElementById("arrowUp");

document.addEventListener("scroll", function () {
  console.log(window.pageYOffset);

    if(window.pageYOffset > 500){
        arrowUp.style.cursor = "pointer";
        arrowUp.style.opacity = "1";
    } else{
        arrowUp.style.cursor = "unset";
        arrowUp.style.opacity = "0";

    }
});

arrowUp.addEventListener("click", function(){ 
    smoothScroll("#to-home", 500);
});
