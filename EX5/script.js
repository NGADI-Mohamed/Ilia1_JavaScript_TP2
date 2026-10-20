let images = [
    "images/image1.jpg",
    "images/image2.avif",
    "images/image3.jpg",
    "images/image4.jpg"
];

let index = 0;

let image = document.getElementById("image");

function suivant(){
    index ++ ;

    if(index >= images.length){
        index = 0 ;
    }
    
    image.setAttribute("src", images[index]);
    // or use :
    // image.src = images[index];
}

function precedent(){
    index -- ;

    if(index < 0){
        index = images.length - 1 ; // 3
    }

    image.setAttribute("src", images[index]);
}