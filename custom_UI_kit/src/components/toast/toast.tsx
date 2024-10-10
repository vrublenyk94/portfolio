import React from 'react';
import './toast.css'

interface ToastProps {
    title: React.ReactNode,
    onClick: ()=> void
}
const Toast:React.FC<ToastProps> = ({title, onClick}) => {
    return (
        <div className='toast'>
            <h3 className="toast-title">{title}</h3>
            <button className="toast-close"onClick={onClick} data-testid="modal-close-button"></button>
        </div>
    );
}

export default Toast;
