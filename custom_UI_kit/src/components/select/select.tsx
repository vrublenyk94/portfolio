import React, { useState } from 'react';
import './select.css'

interface SelectProps {
    options: string[],
    defaultValue: React.ReactNode
    label?: React.ReactNode
}

const Select: React.FC<SelectProps> = ({label, options, defaultValue = 'Choose option'}) => {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(defaultValue)

    const handleListClose = (item) => {
        setVisible(false),
        setValue(item)
    }

    return (
        <div className='select-box'>
            <span className="select-label">{label}</span>
            <div className="select" onClick={() => setVisible(!visible)}>{value}</div>
            <ul data-testId='select' className={visible === true?"select-options visible": "select-options"}>
                {options.map((item, index) => (
                    <li className='select-option'  key={index} value={item} onClick={()=> handleListClose(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Select;