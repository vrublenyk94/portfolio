import React from 'react';
import './modal.css'

interface ModalProps {
    onClick?:() => void,
    title: React.ReactNode,
    descr: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({title = 'Title', descr, onClick}) => {
    return (
        <div className={`modal`}>
            <h2 className="modal__title">{title}</h2>
            <button className="modal__close" onClick={onClick} data-testid="modal-close-button"></button>
            <div className="modal__descr">
                {descr}
            </div>
        </div>
    );
}

export default Modal;