
import React, { useEffect } from 'react';
import './Backdrop.css';


const Backdrop = ({ showing, modalHandler }) => {
    useEffect(() => {
        if(showing) document.body.classList.add('no-scroll'); else document.body.classList.remove('no-scroll');
    },[showing]);
    return showing && <div onClick={() => modalHandler()} className='backdrop-class' />;
};

export default Backdrop;
