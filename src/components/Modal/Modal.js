
import React from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../../components/Backdrop/Backdrop';
import './Modal.css';


const Modal = ({ children: childs, showing, modalHandler }) => createPortal(
    <>
        <Backdrop showing={showing} modalHandler={modalHandler}/>
        {showing && <div className='my-modal-class'>{childs} </div>}
    </>,
    document.getElementById('portals')
);



export default Modal;