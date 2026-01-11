import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList() {
    // const tasks=['Buy groceries', 'Do homework', 'Read a book'];
    const [tasks, setTasks] = useState([
        'Buy groceries', 'Do homework', 'Read a book']);
        const [newTask, setNewTask]=useState('');
        const handleAddTask=()=>{
            const trimmedTask=newTask.trim();
            if(trimmedTask===''||tasks.includes(trimmedTask)){
                return;
            }
            setTasks([...tasks, trimmedTask]);
            setNewTask('');
        };

    return(
        <div>
            <h1>tasks list</h1>
            <ul>
                {tasks.map((task, index)=>(
                    <TodoItem key={index} task={task}/>//זה בעצם שולח לי את המשימה לTodoItem
                ))}
            </ul>
            <input 
                type="text"
                placeholder="New task"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                />
            <button onClick={handleAddTask}>Add Task</button>
           
        </div>
    );
}
export default TodoList;