import React from 'react';
import './TodoItem.css';
function TodoItem({ task ,onToggleComplete,onDelete}) {
    const className = task.completed ? 'done' : 'pending';

    return (
    <li className={className}>
        <span>{task.title}</span>
        {' '}
        <small>({task.completed? 'Done' : 'Pending'})</small>
        {' '}
        <small>Code: {task.code}</small>
        {' '}
        {!task.completed && (
            <button onClick={() => onToggleComplete(task.code)}>Mark as Done</button>
        )}
        {' '}
        <button onClick={() => onDelete(task.code)}>Delete</button>

    </li>
)
}
export default TodoItem;