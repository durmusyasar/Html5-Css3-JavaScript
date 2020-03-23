// Select All Elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
// All events liteners
function eventListeners(){ // Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo === "") showAlert("danger", "Lütfen Bir Todo Giriniz...");
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi...");
    } 
    e.preventDefault();
}

// Adds the received string value to the UI as a list item
function addTodoToUI(newTodo){
    console.log(newTodo)
    // Create list item
   const listItem = document.createElement("li");
    // create link
   const link = document.createElement("a");
   link.href = "#";
   link.className = "delete-item";
   link.innerHTML = "<i class = 'fa fa-remove'></i>";
   listItem.className = "list-group-item d-flex justify-content-between";
   // Adding text note
   listItem.appendChild(document.createTextNode(newTodo));
   listItem.appendChild(link);
   // Adding a list item to the Todo list
   todoList.appendChild(listItem);
   todoInput.value = "";
}

function showAlert(type, message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    //setTimeOut
    setTimeout(function(){
        alert.remove();
    },1200)
}

function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null) todos = [];
    else todos = JSON.parse(localStorage.getItem("todos"));
    return todos;
}
 
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function deleteTodo(e) {
    if(e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Başarıyla Silindi...");
    }
}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo, index){
        if (todo === deleteTodo) todos.splice(index,1); // Remove array value
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function filterTodos(e){ 
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1) listItem.setAttribute("style", "display : none !important");
        else listItem.setAttribute("style", "display : block");
    });
}

function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz ?")){
        while(todoList.firstElementChild != null) todoList.removeChild(todoList.firstElementChild);
        localStorage.removeItem("todos");
    }
}