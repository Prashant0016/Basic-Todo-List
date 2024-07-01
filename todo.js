const todolist =[];

renderToDoList();

function renderToDoList() {
    let todoHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const { name, duedate } = todolist[i];
        const html = `
            <div>${name}</div>
            <div>${duedate}</div>
            <button class="del-btn" onclick="deleteToDoItem(${i})">DELETE</button>
        `;
        todoHTML += html;
    }

    document.querySelector('.todo-list-items').innerHTML = todoHTML;
}


function AddToDo() {
    const inputName = document.querySelector('.todo-naming-section');
    const name = inputName.value.trim();

    const inputDueDate = document.querySelector('.todo-date-section');
    const duedate = inputDueDate.value;

    if (name !== '' && duedate !== '') {
        todolist.push({ name, duedate });

        inputName.value = '';
        inputDueDate.value = '';

        renderToDoList();
    } else {
        alert('Please enter both task name and due date.');
    }
}


function deleteToDoItem(index) {
    todolist.splice(index, 1);
    renderToDoList();
}
