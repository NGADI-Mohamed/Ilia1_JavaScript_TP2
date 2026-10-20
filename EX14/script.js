// get the elements
let elements = document.querySelectorAll(".element");
// get the destination box
let destination = document.getElementById("destination");

// save elements ids when the drag event start 
elements.forEach(function(element){
    element.addEventListener("dragstart", function(event){
        event.dataTransfer.setData("text/plain", element.id);
    });
});

// make the destination accept the drag element
destination.addEventListener("dragover", function(event){
    event.preventDefault();
});

// drop event
destination.addEventListener("drop", function(event){
    event.preventDefault();

    // get the id of the element we drag
    let id = event.dataTransfer.getData("text/plain");
    let element = document.getElementById(id);

    // verify if the element exist
    if(element){
        destination.appendChild(element);
    }
});