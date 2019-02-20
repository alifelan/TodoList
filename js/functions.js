function add(){
    var todo = document.getElementsByClassName("newTodo")[0].value;
    var new_todo = document.createElement("input");
    new_todo.type = "checkbox";
    new_todo.classList.add("checkbox");
    new_todo.classList.add("todo");
    document.getElementsByClassName("listOfTodos")[0].appendChild(new_todo);
    document.getElementsByClassName("listOfTodos")[0].innerHTML += todo + "<br>";
    document.getElementsByClassName("newTodo")[0].value = "";
};

function clearTodos(){
    for(let check of document.getElementsByClassName("checkbox")){
        check.checked = false;
    }
};

function markTodos(){
    for(let check of document.getElementsByClassName("checkbox")){
        check.checked = true;
    }
};

function deleteTodos(){
    document.getElementsByClassName("listOfTodos")[0].innerHTML = "";
};
