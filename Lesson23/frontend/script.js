const apiUrl = "http://localhost:5000/todos";



async function fetchTodos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Помилка отримання даних");

        const todos = await response.json();
        const todoList = document.getElementById("todoList");
        todoList.innerHTML = "";

        todos.forEach(todo => {
            const li = document.createElement("li");
            li.classList.add("list-group-item","d-flex","align-items-center","justify-content-between");
            li.style.textDecoration = todo.completed ? "line-through" : "none";
            const h4 = document.createElement("h4");

            h4.textContent =`${todo.text}`;
            h4.onclick = () => toggleTodo(todo._id,todo.completed)
            const span = document.createElement("span");

            span.textContent = `${todo.desc}`;
            li.onclick = () => toggleTodo(todo._id, todo.completed);

            const div = document.createElement("div");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Видалити";
            deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
            deleteBtn.onclick = () => deleteTodo(todo._id);



            div.appendChild(h4);
            div.appendChild(span)
            li.appendChild(div);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}

async function addTodo() {
    const textElement = document.getElementById("todoText");
    const descElement = document.getElementById("todoDesc");

    const text = textElement.value.trim();
    const desc = descElement.value.trim();
    if (!text || !desc) return alert("Будь ласка, введіть текст та опис!");

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, desc })
        });

        if (!response.ok) throw new Error("Не вдалося додати завдання");

        textElement.value = "";
        descElement.value = "";
        await fetchTodos();
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}

async function toggleTodo(id, completed) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !completed })
        });

        if (!response.ok) throw new Error("Помилка оновлення");
        await fetchTodos();
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Помилка видалення");
        await fetchTodos();
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}
fetchTodos()