// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavItems.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const configure = {
    'خانه': '/',
    'کاربران': '/users',
    'اضافه کردن کاربر': '/add-user',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const NavItems = () => (
    <ul className='nav-items'>
        {Object.entries(configure).map(value => <NavItem key={value[0]} link={value[1]}>{value[0]}</NavItem>)}
    </ul>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItems;