let recherche = document.getElementById("recherche");
let produits = document.querySelectorAll("li");

recherche.addEventListener("input", function(){
    let text = recherche.value.toLowerCase();

    let exist = false; 

    produits.forEach(function(produit){
        let nom = produit.textContent.toLowerCase(); // with li elements use textContent (not value)

        if(nom.includes(text)){
            produit.style.display = "block";
            exist = true ; // the user input exist
        } else {
            produit.style.display = "none";
        }

    })

    // change the border color depending on the existing 
    if(exist){
        recherche.style.border = "2px solid green";
    } else {
        recherche.style.border = "2px solid red"
    }

})
