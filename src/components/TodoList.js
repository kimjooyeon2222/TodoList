import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => {
                return <TodoItem task={task} deleteTask={deleteTask} index={index} />;
            })}
        </ul>
    )
}


export default TodoList;