

import React from 'react';
import MyP from '../MyP/MyP';
import './MyDiv.css';


const MyDiv = props => <div className='my-div'>
        <h4>name: <code>{props.name}</code></h4>
        <h4>lastname: <code>{props.lastname}</code></h4>
        <MyP style={{color: 'gray'}}>{props.children || 'test'}</MyP>
    </div>;


export default MyDiv;
