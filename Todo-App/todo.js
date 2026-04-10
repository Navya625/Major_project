let todoList = [
    { item: 'Buy milk', dueDate: '2024-10-04' },
    { item: 'Go to college', dueDate: '2024-10-04' }
];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem === '' || todoDate === '') {
        alert('Please enter both task and due date.');
        return;
    }

    todoList.push({ item: todoItem, dueDate: todoDate });

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let countElement = document.querySelector('.todo-count');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
            <div>
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
            </div>
        `;
    }

    containerElement.innerHTML = newHtml;
    countElement.textContent = `Total Tasks: ${todoList.length}`;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    displayItems();
}

