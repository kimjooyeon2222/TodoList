import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function BasicTodo() {

    // tasks []
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

    // addTask
    function addTask(newTask) {
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    // deleteTask
    function deleteTask(delete_index) {
        const newTasks = tasks.filter((item, item_index) => {
            if (item_index === delete_index) {
                return false;
            } else {
                return true;
            }
        })
        setTasks(newTasks);
    }

    return (
        <div>
            <h1>TODO List</h1>
            {/* AddTodo */}
            <AddTodo addTask={addTask} />
            {/* TodoList */}
            <TodoList tasks={tasks} deleteTask={deleteTask} />
        </div>
    )

}

export default BasicTodo;
