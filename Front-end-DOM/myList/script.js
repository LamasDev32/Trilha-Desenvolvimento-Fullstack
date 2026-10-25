const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.value.trim();

    /* Válida se o valor é vazio ou válido */
    if(!taskText) {
        alert("Por favor, insira uma tarefa válida.");
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    /* Botão para remover tarefa */

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

function limpar() {
    taskList.remove();
    window.location.reload();
}