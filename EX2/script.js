// variable to track changes
let isMasque = false;  
// get the text in the paragraph
var firstText = document.getElementById("my-text").textContent;

function masquer(){
    // select paragraph and button elements
    var text = document.getElementById("my-text");
    var btn = document.getElementById("btn");


    if(isMasque){
        text.innerText = firstText;  // show the text
        btn.textContent = "Masquer";  // update the button text
        isMasque = false;
    } else {
        text.innerHTML = "";      // hide the text
        btn.textContent = "Afficher";  // update the button text
        isMasque = true ;
    }
    
}