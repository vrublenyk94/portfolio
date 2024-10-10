import { useSelector } from 'react-redux';
import './strike.css'


const Strike = () => {
    const strike = useSelector(state => state.game.strikeClass)

    return (
        <div className={`strike ${strike}`}>
            
        </div>
    );
}

export default Strike;
