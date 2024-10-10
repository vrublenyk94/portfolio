import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCurrentDate, handleNextPeriod, handlePrevPeriod } from '../../store/actions/headerActions';
import { setSelectedDate, setUser, setView } from '../../store/slices/headerSlice';
import {useEffect} from 'react';
import {Button} from 'ui-kit-vr';
import {Dropdown} from 'ui-kit-vr'
import { auth } from '../../firebaseSetup';
import './header.css'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.header.user);
    const selectedDate = useSelector((state) => state.header.selectedDate);
    const view = useSelector((state) => state.header.view);
    const currentDate = useSelector((state) => state.header.currentDate);
    const monthNumToReadable = useSelector(state => state.header.monthNumToReadable);



    useEffect(() => {
        dispatch(setSelectedDate(currentDate))
    }, [])

    const handleCurrentDateClick = () => {
        dispatch(handleCurrentDate(currentDate));
    };

    const handleViewChange = (value) => {
        dispatch(setView(value))
    }

    const handleLogout = async () => {
        try {
            await auth.signOut()
            dispatch(setUser(null))
        }catch (error) {
            console.error('Error signing out:', error);
        }
    };
    
    return (
        <div className='header'>
            <div className="header__wrapper--l">
                <div className="header__logo"></div>
                <Button type={'primary'} onClick={handleCurrentDateClick} children='Today'/>
                <div className="header__wrapper">
                    <button className="header__btn header__btn--prev" onClick={() => dispatch(handlePrevPeriod(selectedDate, view))}></button>
                    <button className="header__btn header__btn--next" onClick={() => dispatch(handleNextPeriod(selectedDate, view))}></button>
                </div>
                <div className="header__date"> {view === 'Day'? `${monthNumToReadable[selectedDate?.getMonth() || 0]} ${selectedDate?.getDate()},`: monthNumToReadable[selectedDate?.getMonth() || 0] } {selectedDate?.getFullYear()}</div>
            </div>
            <div className="header__wrapper--l">
                <Dropdown defaultOption='Week' options={['Day', 'Week']} onValueChange={handleViewChange} width='90px' />
                <div className="header__username">{user.displayName}</div>
                <div className="header__userlogo" style={{background: `url(${user.photoURL})center`, backgroundSize: '85%'}} onClick={() => setIsVisible(!isVisible)}>
                    {
                        isVisible &&(
                            <button className="logout" onClick={handleLogout}>
                                <div className="logout__icon"></div>
                                Logout
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;