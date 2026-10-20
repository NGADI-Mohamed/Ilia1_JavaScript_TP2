function calculer(operation){
    // select the two numbers
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // select the result 
    let result = document.getElementById("result");
    
    // verify if the user enter two numbers
    if(!isNaN(num1) && !isNaN(num2)){
        if(operation === "+"){
            let res = num1 + num2;
            result.value = num1 + " + " + num2 + " = " + res ;
        } 
        if(operation === "-"){
            let res = num1 - num2;
            result.value = num1 + " - " + num2 + " = " + res ;
        } 
        if(operation === "*"){
            let res = num1 * num2;
            result.value = num1 + " * " + num2 + " = " + res ;
        } 
        if(operation === "/"){
            if(num2 == 0){
                alert("Division by zero is impossible !");
            }else {
                let res = num1 / num2;
                result.value = num1 + " / " + num2 + " = " + res ;
            }
            
        } 
    } else {
        alert("Enter two numbers !!");
    }

}

