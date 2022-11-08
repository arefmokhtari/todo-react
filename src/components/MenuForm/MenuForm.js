
import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import DynCM from '../../hoc/DynCM';
import { setDataNav } from '../../utils/plugins';
import './MenuForm.css';
import BtnMenu from './BtnMenu/BtnMenu';

const MenuFrom = ({ hide, value, showing }) => {
    const [data, setData] = useState({
        name: '',
        val: '',
    });
    const btnHandler = (name, callback) => setDataNav(value, setData, name, callback);
    return <>
    <Backdrop onClick={() => hide(false)}>
    </Backdrop>
    {showing && <DynCM className='my-form-menu'>
        <p className='my-form-menu-text' style={{padding: 0,height: '10px',fontSize: '20px'}}>select:</p>
        
        {Object.entries({
            max: Math.max,
            min: Math.min,
            'Remove Duplicate': (... arr) => [... new Set(arr)].join(', '),
'Find Duplicate': (... arr) => [... new Set(arr.filter((value, index, array) => array.indexOf(value) !== index))].join(', ') || 'empty !'})
        .map(value => <BtnMenu key={value[0]} name={value[0]} onClick={btnHandler.bind(null, ... value)}/>)}
        <h2 className='my-form-menu-text'>{data.name}</h2>
        <p className='my-form-menu-text' style={{fontSize: '20px'}}> {data.val}</p>
    </DynCM>}
    </>;
}

export default MenuFrom;