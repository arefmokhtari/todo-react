

import React from 'react';
import Wrapper from './../hoc/Wrapper';
import P from '../P/P';


const InputForm = props => <>
    <P>{props.textinput}</P>
    <input type={'text'} ref={props.getinput} onChange={props.onchange}/>
</>;



export default Wrapper(InputForm, 'input-class set-inputform');