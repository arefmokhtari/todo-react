
import React from 'react';
import './NavItem.css';

const NavItem = ({link, children: childs}) => (
    <li className='nav-item'>
        <a href={link}>{childs}</a>
    </li>
);

export default NavItem;