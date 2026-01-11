import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import TodoForm from '../TodoForm';
import Dialog from '../Dialog/Dialog';
import LoginForm from '../Login/LoginForm';

function TodoList() {
    const [tasks, setTasks] = useState([
        { code: 1, title: 'Buy groceries', completed: false },
        { code: 2, title: 'Do homework', completed: true },
        { code: 3, title: 'Read a book', completed: false },
    ]);

    const [dialog, setDialog] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeDialog = () => {
        setDialog(null);
    };
    
    const handleLogin = async (username) => {
        setLoading(true);
        const API_URL = 'https://jsonplaceholder.typicode.com/users';
        try {
            const response = await fetch(`${API_URL}?username=${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            if (users.length === 1) {
                setIsLoggedIn(true); // הצגת רשימת המשימות
                alert(`Hello, ${users[0].name}! Login Successful.`);

            } else {
                // 3. כישלון: המשתמש לא נמצא
                setIsLoggedIn(false);
                alert("Login failed: Username not found."); //
            }
        } catch (error) {
            console.error('Login Error:', error);
            alert("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const confirmedDeleteTask = (taskCode) => {
    const updatedTasks = tasks.filter(task => task.code !== taskCode);
    setTasks(updatedTasks);
    closeDialog(); // סגירת הדיאלוג
};
const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') return;
    if (tasks.some(task => task.title.toLowerCase() === title.toLowerCase())) return;

    const newObjectTask = {
        code: Date.now(),
        title: trimmedTitle,
        completed: false,
    };
    setTasks([...tasks, newObjectTask]);
    setDialog({
        type: 'success',
        backgroundColor: 'lightgreen',
        title: 'המשימה נוספה בהצלחה',
        message: `המשימה "${trimmedTitle}" התווספה לרשימה.`,
        onConfirm: closeDialog,
    });

};
const toggleComplete = (taskCode) => {
    const updatedTasks = tasks.map((task) => {
        if (task.code === taskCode) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    setTasks(updatedTasks);
}

const deleteTask = (taskCode) => {
    const taskToDelete = tasks.find(task => task.code === taskCode);
    if (!taskToDelete) return;


    setDialog({
        type: 'confirmDelete',
        backgroundColor: 'lightcoral',
        taskCode: taskCode,
        title: 'אישור מחיקה',
        message: `האם למחוק את המשימה "${taskToDelete.title}"?`,
        onConfirm: () => confirmedDeleteTask(taskCode), //יופעל אם ינסו למחוק
        onCancel: closeDialog, // יופעל אם יבטלו את המחיקה: או שילחצו על x א
        //או שילחצו ביטול
    });
};

    return (
        <div>
            {/* 1. אם ה-API טוען, נציג הודעה מתאימה */}
            {loading && <h1>Loading...</h1>}

            {/* 2. תצוגת הרשימה: אם מחובר, נציג את ה-TodoList המלא */}
            {isLoggedIn && !loading && (
                <>
                    <h1>tasks list</h1>
                    <TodoForm onAddTask={addTask} />
                    <ul>
                            {tasks.map((task) => (
                <TodoItem key={task.code}
                    task={task}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                />//זה בעצם שולח לי את המשימה לTodoItem
            ))}
                    </ul>
                </>
            )}
            {/* 3. טופס התחברות: אם לא מחובר, נציג את טופס ההתחברות */}
            {!isLoggedIn && !loading && (
                <LoginForm onLogin={handleLogin} />
            )}

                    {dialog && dialog.type === 'success' && (
            <Dialog
                backgroundColor={dialog.backgroundColor}
                onClose={closeDialog}
            >
                <h3>{dialog.title}</h3>
                <p>{dialog.message}</p>
                <button onClick={closeDialog}>אישור</button>
            </Dialog>
        )}
        {dialog && dialog.type === 'confirmDelete' && (
            <Dialog
                backgroundColor={dialog.backgroundColor}
                onClose={dialog.onCancel}
            >
                <h3>{dialog.title}</h3>
                <p>{dialog.message}</p>

                <div>
                    <button onClick={dialog.onConfirm}>אישור</button>
                    <button onClick={dialog.onCancel}>ביטול</button>
                </div>
            </Dialog>
        )}

        </div>
    );
}

export default TodoList;