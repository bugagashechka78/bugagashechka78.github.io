let todos = [];

// Проверяем, есть ли сохраненные дела в LocalStorage
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
    displayTodos();
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;
    if (todoText) {
        todos.push({ text: todoText, done: false });
        displayTodos();
        saveToLocalStorage();
        todoInput.value = '';
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
    saveToLocalStorage();
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    displayTodos();
    saveToLocalStorage();
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if (todo.done) {
            li.classList.add('done');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✘';
        deleteButton.onclick = () => deleteTodo(index);
        const doneButton = document.createElement('button');
        doneButton.textContent = '✔';
        doneButton.onclick = () => toggleDone(index);
        li.appendChild(deleteButton);
        li.appendChild(doneButton);
        todoList.appendChild(li);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
