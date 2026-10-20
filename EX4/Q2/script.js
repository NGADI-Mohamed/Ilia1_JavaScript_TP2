let display = document.getElementById("display");

function appendValue(value){
    display.value += value ;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
    // or you can use this :
    // display.value = display.value.substring(0, display.value.length-1);
}

function calculer(){
    let expression = display.value ;

    if(expression.trim() === ""){
        return
    } else {
        let result = eval(expression);
        
        if(!isFinite(result)){
            display.value = "Erreur" ;
        } else {
            display.value = result ;
        }
    }
}