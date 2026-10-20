// select the box
let box = document.getElementById("my-text");
temp = true ;
function changer(){
    if(temp){
        box.setAttribute("class", "box box1");
        temp = false ;
    } else {
        box.setAttribute("class", "box box2")
        temp = true;
    }
}