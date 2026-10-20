// get the body and button elements
let btn = document.getElementById("btn");
let body = document.body;

// get the theme from local storage every reload
let theme = localStorage.getItem("theme");

// apply the theme stored after reloading the page
if(theme == "dark"){
    body.setAttribute("class", "dark");
    btn.setAttribute("class", "dark");
    btn.textContent = "Activer le Thème Clair";
} 
if(theme == "light"){
    body.setAttribute("class", "light");
    btn.setAttribute("class", "light");
    btn.textContent = "Activer le Thème Sombre";
}

// change the theme and save it after click the button
function changeTheme(){
    if(theme == "dark"){
        body.setAttribute("class", "light");
        btn.setAttribute("class", "light");
        btn.textContent = "Activer le Thème Sombre";
        theme = "light";
    } else {
        body.setAttribute("class", "dark");
        btn.setAttribute("class", "dark");
        btn.textContent = "Activer le Thème Clair";
        theme = "dark";
    }

    // save the theme
    localStorage.setItem("theme", theme);
}