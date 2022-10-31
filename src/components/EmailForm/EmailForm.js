


import React from 'react';
import { useRef } from 'react';
import Wrapper from '../hoc/Wrapper';


const EmailForm = props => {
    const [email, password] = [useRef(), useRef()];
    
    return <>
        <input type={'submit'} className='submit-btn' value={'save'} disabled={!props.disablesubmit} onClick={props.save.bind(this, email, password)}/>
        <input type={'text'} placeholder={'email ...'} ref={email}/>
        <input type={'text'} placeholder={'password ...'} ref={password}/>
        <input type={'submit'} className='submit-btn' value={'login'} disabled={props.disablesubmit} onClick={props.check.bind(this, email, password)}/>
    </>;
}

export default Wrapper(EmailForm, 'input-class set-emailform');

