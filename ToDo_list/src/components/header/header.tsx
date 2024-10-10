import { useState } from 'react';
import {useAddTask} from '../../queries.js'
import './header.css'
const Header = () => {
    const [task, setTask] = useState('');
    const addTask = useAddTask();

    const handleAddTask = () => {
        addTask.mutate({ description: task });
        setTask('');
    };

    return (
        <div className='header'>
            <label className="header__label">
                <input
                    type="text" 
                    className="header__input" 
                    placeholder='Type here to add task...' 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="header__btn" onClick={handleAddTask}>Add</button>
            </label>
        </div>
    );
}

export default Header;