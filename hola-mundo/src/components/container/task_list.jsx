import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask])

    useEffect(() => {
        console.log('Modificacion de tareas')
        return () => {
            console.log('Se elimino la tarea')
        };
    }, [tasks]);

    const changeComplete = () => {
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
