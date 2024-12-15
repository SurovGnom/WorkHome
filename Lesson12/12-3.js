document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("list");
    const input = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText) {
            const newTask = document.createElement("li");
            newTask.innerHTML = `${taskText} <button data-action="delete">Видалити</button>`;
            list.appendChild(newTask);
            input.value = "";
        }
    });

    list.addEventListener("click", (event) => {
        if (event.target.dataset.action === "delete") {
            event.target.closest("li").remove();
        }
    });
});