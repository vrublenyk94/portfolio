import React from 'react';
import './colorpicker.css';

interface ColorpickerProps {
    colors: string[],
    title: React.ReactNode
}

const Colorpicker:React.FC<ColorpickerProps> =  ({ colors, title = 'Colors' }) => {
    return (
        <>
            <h2 className="colorpicker-title">{title}</h2>
            <div className='colorpicker'>
                {colors.map((item, index) => (
                    <div className="color" key={index} style={{ background: item }} role='button'></div>
                ))}
            </div>
        </>
    );
};

export default Colorpicker;