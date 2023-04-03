import {Task} from '../models/task.model.mjs'


let tasksTab = [

    new Task(1, true, 'A simple Task'),
    new Task(2, false, 'Another task'),
    new Task(3, false, 'Lorem Ipsum.'),
];


class TaskService {

    getTasks = () => {
        const prom = new Promise((resolve, rejected) => {
                resolve(tasksTab);
            });

        return prom;

    }

    createTask = () => {

    }

    getTaskById = () => {

    }

    getTaskByChecked = () => {

    }

    updateTask = () => {

    }

    deleteTaskById = (idI) => {
        tasksTab = tasksTab.filter(task => task.id !== idI);
    }

}

export {TaskService};