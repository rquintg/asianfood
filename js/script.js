
document.getElementById("boton-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll >0){
       //window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, 0);
       //window.scrollTo(0, currentScroll - (currentScroll /15 ));
    }
}

botonUp = document.getElementById("boton-up"); 

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 200) {
        botonUp.style.transform = "scale(1)";
    }else{
        botonUp.style.transform ="scale(0)";
    }
   
    
}