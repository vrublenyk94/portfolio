import React from 'react';
import './input.css'

type InputType = 'name' | 'password' | 'email' | 'number' | 'text' | 'tel' | 'textarea';
interface InputProps {
    label?: React.ReactNode,
    placeholder?: React.ReactNode,
    disabled?: boolean,
    errorMessage?: React.ReactNode,
    cols?: React.ReactNode,
    rows?: React.ReactNode
}

const Input: React.FC<InputProps> = ({type = 'name', label, placeholder,cols, rows, disabled= false, errorMessage}) => {
    return (
        <label className='label'>
            <span >{label}</span>
            <input type={type} className={`input ${type === 'textarea'? 'textarea': null}`} cols = {cols} rows={rows} placeholder={placeholder} disabled={disabled} role='input' />
            {type === 'password'? <div className="password-icon" role='passIcon'></div>: null}
            <span className="error">{errorMessage}</span>
        </label>
    );
}

export default Input;