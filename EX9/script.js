function addTask(){
    // get the input task
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // verify if the user enter somthing
    if(taskText !== ""){
        // get the todo list element
        let ul = document.getElementById("todoList");

        // create list item to store the task
        let li = document.createElement("li")

        // create span element
        let span = document.createElement("span");
        span.textContent = taskText;

        // create checkbox input
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // make the task done if the user ckecked the checkbox
        checkbox.onchange = function() {
            if(checkbox.checked){
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        };

        // create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function(){
            deleteTask(li);
        };

        // store the elemnets in the list item
        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(deleteBtn);

        // store the list item in the todo list
        ul.appendChild(li);

        // clear the input area 
        taskInput.value = "";

    } else {
        // if the user enter space or nothing
        alert("Please enter a task");
    }
    
}

function deleteTask(task){
    // get the todo list element
    let ul = document.getElementById("todoList");
    // delete the specified tast 
    ul.removeChild(task);
}