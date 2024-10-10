import {useState} from 'react';
import { Checkbox } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { Modal } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { Button } from 'ui-kit-vr/dist/uikit-vr.cjs';
import './calendarItem.css'

const CalendarItem = ({item, index, onMouseEnter, onMouseLeave, visible, onDelete, onEdit, onCheck}) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const handleDeleteOpen = () => {
        setIsDeleting(!isDeleting)
    }
    const handleCheckboxChange = (checked) => {
        onCheck(index, checked);
    };

    return (
        <li
            className="calendarCreator__item"
            key={index}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave(null)}
        >
            <Checkbox label={item.name} width='100px' color={item.color} onChange={handleCheckboxChange} isChecked={item.eventsVisible}/>
            <div className="calendarCreator__item-wrapper" style={{ display: visible === index ? 'flex' : 'none' }}>
            { index> 0 &&(
                <button className="calendarCreator__item-btn calendarCreator__item-btn--delete" onClick={handleDeleteOpen}></button>
            )}
                
                <button className="calendarCreator__item-btn calendarCreator__item-btn--edit" onClick={() => onEdit(index)}></button>
            </div>
            {isDeleting && (
                    <Modal 
                    title='Delete calendar'
                    width='520px'
                    height='173px'
                    position='absolute'
                    onClick={handleDeleteOpen}
                    top='90%'
                    left='-50px'
                    descr = {
                        <>
                            <div>
                                Are you sure you want to delete {item.name} calendar? You'll no longer have access to it. 
                            </div>

                            <div className="deleteModal-wrapper">
                                <Button type='secondary' onClick={handleDeleteOpen} children='Cancel'/>
                                <div className="margin"></div>
                                <Button type='primary' onClick={() => onDelete(index)} children='Delete' />
                            </div>
                        </>
                    }
                 />
                )
            }
        </li>   
    );
}

export default CalendarItem;
