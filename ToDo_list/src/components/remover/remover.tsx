import {useDeleteAllTasks} from '../../queries.js';
import './remover.css'

const Remover = () => {
    const deleteAllTasks = useDeleteAllTasks();
    const handleTaskDelete = () => deleteAllTasks.mutate();
    return (
        <button className='remover' onClick={handleTaskDelete}> Clear all tasks</button>
    );
}

export default Remover;