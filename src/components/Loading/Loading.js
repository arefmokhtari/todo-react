
import React,{ useEffect } from 'react';
import RenderCM from '../hoc/RenderCM';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = () => {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => document.body.classList.remove('no-scroll');
    }, []);

    return <ReactLoading color='blue' height={'15%'} width={'15%'} className='loading-main' />;
};


export default RenderCM(Loading, {className: 'loading'});