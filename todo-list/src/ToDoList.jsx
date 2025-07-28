import React, {useState} from 'react';

function ToDoList(){

    const [task, setTask] = useState(["Eat breakfast", "Go to work", "Read a book"]);
    const [newTask, setNewTask] = useState("");

    function handleChange(e) {
        setNewTask(e.target.value);
    }

    function addTask(){

        if (newTask.trim() !== "") {
        setTask(t => [...t, newTask]);
        setNewTask(""); // Clear input after adding
        }

    }

    function deleteTask(index){


        setTask(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){

        const updatedTask = [...task];
        if (index > 0) {
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }

    }

    function moveTaskDown(index){

        const updatedTask = [...task];
        if (index < task.length - 1) {
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }

    }
    
    return(
        <>
        <div className="todo-list">
            <h2>To Do List</h2>

            <ol>
                {task.map((item, index) => (
                    <li key={index}>
                        <span className='item-name'> {item} </span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>




            <input type="text" value={newTask} placeholder="Enter a new task" onChange={handleChange}></input>
            <button className="submit-button" onClick={addTask}> Submit </button>

        </div>
        
        </>
    );
}

export default ToDoList;