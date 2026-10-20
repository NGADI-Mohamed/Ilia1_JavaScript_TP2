function demarrerProgression(){
    // récuperer le div barre et le bouton
    let barre = document.getElementById("barre");
    let btn = document.getElementById("btn");
    let progression = 0;

    // disable button while the bar is progressing
    btn.disabled = true;
    // restore bar width to 0% after each click
    barre.style.width = "0%";

    let interval = setInterval(function(){
        if(progression >= 100){
            clearInterval(interval);
            btn.disabled = false;
            return;
        }
        progression ++;
        barre.style.width = progression + "%";
    }, 30);
}