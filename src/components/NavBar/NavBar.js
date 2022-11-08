
import React from 'react';
import DynCM from '../../hoc/DynCM';
import './NavBar.css';

const NavBar = ({children, onClick}) => {
    return <DynCM className='my-navbar-form' onClick={onClick}>{children}</DynCM>
}

export default NavBar;
