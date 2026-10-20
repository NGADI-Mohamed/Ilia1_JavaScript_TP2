let timer = document.getElementById("timer");

let secondes = 0;

setInterval(function(){
    secondes ++ ;

    timer.textContent = "Temps écoulé : " + secondes + " secondes" ;
    
}, 1000); // 1000 milesecondes = 1 seconde