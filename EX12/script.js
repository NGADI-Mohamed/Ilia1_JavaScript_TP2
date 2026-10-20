function adapterLayout(){
    // récupérer le div container
    let container = document.getElementById("container");

    if(window.innerWidth < 700){
        container.style.gridTemplateColumns = "1fr"; // or use repeat(1, 1fr)
    } else {
        container.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
}

// adapter layout au chargement de la page
adapterLayout();

// adapter layout lors du redimentionnement
window.addEventListener("resize", adapterLayout);