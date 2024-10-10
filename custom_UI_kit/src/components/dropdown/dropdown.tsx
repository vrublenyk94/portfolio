import React, { useState } from 'react';
import './dropdown.css'

interface DropdownProps {
    options: string[],
    defaultOption: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({options, defaultOption}) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(defaultOption)

    const handleValueChange = (item) => {
        setVisible(false)
        setValue(item)
    }

    return (
        <div className='dropdown-block'>
            <div className="dropdown" onClick={() => setVisible(!visible)} value={value} data-testId="dropdown">
                {value}
                <div className="dropdown-icon"></div>
            </div>
            <ul className={`dropdown-options ${visible === true? 'visible': 'hidden'}`}>
                {options.map((item, index) => (
                    <li  className="dropdown-option" key={index} value={item} onClick={() => handleValueChange(item)} role='listitem'>{item}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default Dropdown;
