const form = document.forms.form;
const inputTask = document.querySelector('.js--form__input ');
const addButton = document.querySelector('.form__btn');
const ul = document.querySelector('.js--todos-wrapper');

let tasks =[];


if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => addTask(task.content));
}

addButton.addEventListener('click', () => {
    const content = inputTask.value.trim();
    if (content) {
        addTask(content,false);
        tasks.push({ content,completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        inputTask.value = '';
    } else {
        alert('Введіть завдання!');
    }
});

function addTask(content,completed){
    const li = document.createElement('li');
    li.classList.add('todo-item')

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', (e) => {

      const taskIndex = tasks.findIndex(task => task.content === content);

        if (taskIndex > -1) {
            tasks[taskIndex].completed = checkbox.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        li.classList.toggle('todo-item--checked', e.target.checked);
    })


    const span = document.createElement('span');
    span.classList.add('todo-item__description')
    span.textContent = content;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('todo-item__delete');
    removeBtn.innerText = "Видалити";

    removeBtn.addEventListener('click', () => {
        li.remove();
        tasks = tasks.filter(task => task.content !== content);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })

    li.append(checkbox, span, removeBtn);
    ul.appendChild(li);
}
window.addEventListener('storage', () => {
    ul.innerText = '';
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.content));
});