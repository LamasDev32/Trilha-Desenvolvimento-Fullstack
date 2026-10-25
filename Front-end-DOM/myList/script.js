const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if(!taskText) {
        alert("Por favor, insira uma tarefa válida.")
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}