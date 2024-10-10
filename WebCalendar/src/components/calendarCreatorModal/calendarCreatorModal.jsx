import { Modal } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { Input } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { Colorpicker } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { Button } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { useSelector } from 'react-redux';
import './calendarCreatorModal.css'

const CalendarCreatorModal = ({title, handleModalOpen, handleNameChange, calendarName, handleColorSave,  calendarColor, handleSetCalendarParams}) => {
    const colors = useSelector((state) => state.sidepanel.calendarColors);
    return (
        <>
            <Modal
                title={title}
                onClick={handleModalOpen}
                position='absolute'
                width='300px'
                height='300px'
                left='-30px'
                top='45px'
                descr={
                        <>
                            <div className='modal-wrapper'>
                                <div className='modal-text-icon'></div>
                                <Input
                                    inputType='text'
                                    placeholder='Calendar name..'
                                    disabled={false}
                                    width='220px'
                                    onValueChanged={handleNameChange}
                                    value={calendarName}
                                    defaultValue=''
                                    errorMessage=''
                                />
                            </div>
                            <div className='modal-wrapper'>
                                <div className='modal-pelette-icon'></div>
                                <Colorpicker
                                    title=''
                                    colors={colors}
                                    onColorSelected={handleColorSave}
                                    selectedColor={calendarColor}
                                />
                            </div>
                            <div className='modal-wrapper-btn'>
                                <Button type='primary' children='Save' onClick={handleSetCalendarParams} />
                            </div>
                        </>
                    }
                />
        </>
    );
}

export default CalendarCreatorModal;
