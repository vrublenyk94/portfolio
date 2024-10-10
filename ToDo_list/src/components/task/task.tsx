import { useState } from 'react';
import { useUpdateTask, useDeleteTask } from '../../queries.js';
import './task.css';


const Task = ({ task }) => {
    const [isChangeable, setIsChangeable] = useState(false);
    const [editing, setEditing] = useState(false);
    const [descr, setDescr] = useState(task.description);
    const [complete, setComplete] = useState(task.completed);

    const updateTask = useUpdateTask();
    const deleteTask = useDeleteTask();

    const handleTaskEdit = () => {
        setIsChangeable(false);
        setEditing(true);
    };

    const handleEditConfirm = () => {
        setEditing(false);
        updateTask.mutate({ id: task.id, updatedTask: { description: descr, completed: complete } });
    };

    const handleDeleteTask = () => {
        deleteTask.mutate(task.id);
    };

    const handleDescrChange = (e) => {
        setDescr(e.target.value);
    };

    const handleCheckboxChange = () => {
        const newComplete = !complete;
        setComplete(newComplete);
        updateTask.mutate({ id: task.id, updatedTask: { description: descr, completed: newComplete } });
    };

    return (
        <li className='task' onMouseEnter={() => setIsChangeable(true)} onMouseLeave={() => setIsChangeable(false)}>
            <label className="task__label">
                <input 
                    type="checkbox" 
                    className='task__checkbox' 
                    checked={complete} 
                    onChange={handleCheckboxChange} 
                />
            </label>

            {editing ? (
                <input
                    className="task__descr"
                    value={descr}
                    onChange={handleDescrChange}
                    autoFocus
                />
            ) : (
                <div className="task__descr" style={complete ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {descr}
                </div>
            )}

            <div className="task__btns">
                <button
                    className="task__btn task__btn--edit"
                    onClick={handleTaskEdit}
                    style={isChangeable && !editing ? { display: 'block' } : { display: 'none' }}
                ></button>
                <button
                    className="task__btn task__btn--delete"
                    onClick={handleDeleteTask}
                    style={isChangeable && !editing ? { display: 'block' } : { display: 'none' }}
                ></button>
                <button
                    className="task__btn task__btn--confirm"
                    onClick={handleEditConfirm}
                    style={editing ? { display: 'block' } : { display: 'none' }}
                ></button>
            </div>
        </li>
    );
};


export default Task;