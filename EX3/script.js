// select the form
let myForm = document.getElementById("my-form");

// submit event on the form
myForm.addEventListener("submit", function(event){
    event.preventDefault();

    let isValid = true ;
    let inputs = document.getElementsByName("inputField");
    inputs.forEach((input) => {
        if(input.value.trim() == ""){
            input.setAttribute("class", "input invalid");
            isValid = false ;
        } else {
            input.setAttribute("class", "input valid");
        }
    })

    if(isValid){
        document.getElementById("result").innerText = "Form submitted successfully !";
    } else {
        document.getElementById("result").innerText = "";
    }
})

