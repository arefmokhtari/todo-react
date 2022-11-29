// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import './Loading.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const Loading = () => {
    return <>
        <div className='loading'>
            <div className='cir-loading' />
        </div>
        <Backdrop />
    </>;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;