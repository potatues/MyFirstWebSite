let containerPortfolio = document.getElementById("portfolio-element");
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let containerImage = document.getElementById("containerImage");
let itemsContainer = Array.from(containerPortfolio.querySelectorAll("img"));
let actualTarget;
let modalContainer = document.getElementById("modalContainer");
let imgModal = modalContainer.querySelectorAll("img");
let portFolioText =  Array.from(containerPortfolio.querySelectorAll("p"));
let textModal = document.getElementById("textModal");
let portFolioTitle =  Array.from(containerPortfolio.querySelectorAll("h2"));
let titleModal = document.getElementById("titleModal");
let counterModal = document.getElementById("counterModal");
let portGoProject = Array.from(containerPortfolio.querySelectorAll(".button-go-project"));
let btnProject = document.getElementById("gotoProjectContainer");

function findIndex(e){
    let item = e.target;
    return itemsContainer.indexOf(item);
}
function findIndexText(e){
    let item = e.target;
    return portFolioText.indexOf(item);
}
containerPortfolio.addEventListener("click", function(e){
    actualTarget = findIndex(e);
    if(actualTarget === itemsContainer.length -1){
        arrowRight.style.display = "none";
        containerImage.innerHTML = itemsContainer[findIndex(e)].outerHTML;
        textModal.innerHTML = portFolioText[actualTarget].innerText;
        titleModal.innerHTML = portFolioTitle[actualTarget].innerText;
        btnProject.innerHTML = portGoProject[actualTarget].innerHTML;
        counterModal.textContent = `${actualTarget+1}/${itemsContainer.length}`;    
    }else if(actualTarget === 0){
        arrowLeft.style.display = "none";
        containerImage.innerHTML = itemsContainer[findIndex(e)].outerHTML;
        textModal.innerHTML = portFolioText[actualTarget].innerText;
        titleModal.innerHTML = portFolioTitle[actualTarget].innerText;
        btnProject.innerHTML = portGoProject[actualTarget].innerHTML;
        counterModal.textContent = `${actualTarget+1}/${itemsContainer.length}`;   
    }else{
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
        containerImage.innerHTML = itemsContainer[findIndex(e)].outerHTML;
        textModal.innerHTML = portFolioText[actualTarget].innerText;
        titleModal.innerHTML = portFolioTitle[actualTarget].innerText;
        btnProject.innerHTML = portGoProject[actualTarget].innerHTML;
        counterModal.textContent = `${actualTarget+1}/${itemsContainer.length}`;
    }
});
arrowLeft.addEventListener("click", function(e){
    let i ;
    arrowRight.style.display = "block";
    if(actualTarget > 0 ){
       i = actualTarget;
       actualTarget = i-1;   
        containerImage.innerHTML = itemsContainer[actualTarget].outerHTML;     
        textModal.innerHTML = portFolioText[actualTarget].innerText;
        titleModal.innerHTML = portFolioTitle[actualTarget].innerText;
        btnProject.innerHTML = portGoProject[actualTarget].innerHTML;
        counterModal.textContent = `${actualTarget+1}/${itemsContainer.length}`;
        if(actualTarget === 0){
        arrowLeft.style.display = "none";
        }
    }
});
arrowRight.addEventListener("click", function(e){
    let i ;
    let j;
    arrowLeft.style.display = "block";

    if(actualTarget < itemsContainer.length){
       i = actualTarget;
       actualTarget = i+1;     
        containerImage.innerHTML = itemsContainer[actualTarget].outerHTML;    
        textModal.innerHTML = portFolioText[actualTarget].innerText;
        titleModal.innerHTML = portFolioTitle[actualTarget].innerText;
        btnProject.innerHTML = portGoProject[actualTarget].innerHTML;
        counterModal.textContent = itemsContainer.length;
        counterModal.textContent = `${actualTarget+1}/${itemsContainer.length}`;
        if(actualTarget === itemsContainer.length -1){
     arrowRight.style.display = "none";
        }
    }
});
