
import React from 'react';
import DynCM from '../../hoc/DynCM';
import './Backdrop.css';

const Backdrop = ({children, onClick}) => {
    return <DynCM className='my-backdrop-form' onClick={onClick}>{children}</DynCM>
}

export default Backdrop;
