import React,{useState} from "react";
function TodoForm({onAddTask}){
    const [inputValue, setInputValue]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const trimmedValue=inputValue.trim();
        if(trimmedValue==='')return;
        onAddTask(trimmedValue);
        setInputValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="New task"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}
export default TodoForm;