
import React from 'react';
import './NavItem.css';
import { Link } from 'react-router-dom';

const NavItem = ({link, children: childs}) => (
    <li className='nav-item'>
        <Link to={link}>{childs}</Link>
    </li>
);

export default NavItem;