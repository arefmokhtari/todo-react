
import React from 'react';
import VavBar from '../NavBar/NavBar';
import DynCM from '../../hoc/DynCM';
import './MenuForm.css';

const MenuFrom = ({ hide, value }) => {

    return <VavBar onClick={() => hide(false)}>
        <DynCM className='my-form-menu'>
            {value}
        </DynCM>
    </VavBar>;
}


export default MenuFrom;