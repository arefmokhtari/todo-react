
import './NavItem.css';
import { NavLink } from 'react-router-dom';


const NavItem = ({to, children: childs}) => (
    <li className='nav-item'>
        <NavLink className={({isActive}) => (isActive?'nav-item-cir':'')} to={to}>{childs} <div className='cir'/></NavLink>
    </li>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItem;