import { TaskService } from './services/task.service.mjs';
const taskService = new TaskService();

const displayOneTask = (task, container) => {

    let item = `
    <div class="item">
    <div class="btns">`;

    if (task.checked) {
        item += `<input type="checkbox" id="task-${task.id}-cb" checked>`;
    } else {
        item += `<input type="checkbox" id="task-${task.id}-cb">`;
    }

    item += `
    <label for="taks-${task.id}">${task.id}</label>
    <input type="button" value="Delete ${task.id}" id="task-${task.id}-del">
    </div>
    <p>
    ${task.details}
    </p>
    </div>`;

    container.innerHTML += item;

    // const deleteTaskButton = document.getElementById(`task-${oneTask.id}-del`);
    // console.log(deleteTaskButton)
    // const delTask = deleteTaskButton.addEventListener('click', () => {
    //     console.log(`task-${oneTask.id}-del is clicked`);
    // });
}

const displayTasksList = (tasksList) => {
    const taskListContainer = document.querySelector('.inbox');
    tasksList.forEach(oneTask => {
        displayOneTask(oneTask, taskListContainer);
    });

}

taskService
    .getTasks()
    .then(tasks => displayTasksList(tasks));
