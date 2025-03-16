document.addEventListener('DOMContentLoaded',loadTask);

function loadTask(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(task => addTaskToDOM(task));

}


function addTask(){
    let textInput = document.getElementById('taskInput');
    let taskText = textInput.value.trim();
    
    addTaskToDOM(taskText)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks',JSON.stringify(tasks))
    textInput.value = '';

}

function addTaskToDOM(taskText){
    let ul = document.getElementById('taskList');
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="p-0,4">
            <span class="btn btn-primary">Edit</span>
            <span class=" btn btn-danger" onclick="deleteTask(this)">Delete</span>
        </span>
    `;
   
    ul.appendChild(li);
}

function deleteTask(element){
    let li = element.parentElement.parentElement;
    let taskText = li.firstElementChild.innerText;
    li.remove()

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks = tasks.filter(task => task !== taskText)
    localStorage.setItem('tasks',JSON.stringify(tasks))


}