import { useState } from 'react';

function AddTodo({ addTask }) {

    // newTask = ""
    const [newTask, setNewTask] = useState("");

    function handleChange(event) {
        console.log("event target value", event.target.value);
        setNewTask(event.target.value);
    }

    function addNewTask() {
        if (newTask !== "") {
            addTask(newTask);
            setNewTask("");
        }
    }

    return (
        <div>
            {/* input */}
            <input
                value={newTask}
                onChange={handleChange}
            />
            {/* button */}
            <button onClick={addNewTask}> Add Task </button>
        </div >
    )
}

export default AddTodo;