import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL)

    const changeState = () => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your tasks:
            </div>
            <TaskComponent Task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
