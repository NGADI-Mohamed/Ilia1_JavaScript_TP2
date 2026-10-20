let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

box1.addEventListener("mouseover", function(){
    box1.style.backgroundColor = "Orange";
});

box1.addEventListener("mouseout", function(){
    box1.style.backgroundColor = "rgb(6, 138, 245)";
});

box2.addEventListener("mouseover", function(){
    box2.style.backgroundColor = "green";
});

box2.addEventListener("mouseout", function(){
    box2.style.backgroundColor = "rgb(245, 56, 56)";
})