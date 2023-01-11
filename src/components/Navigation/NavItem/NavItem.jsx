// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { NavLink } from 'react-router-dom';
import {LI} from './NavItem.style';
import './NavItem.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const NavItem = ({to, children: childs}) => (
    <LI>
        <NavLink className={({isActive}) => (isActive?'nav-item-cir':'')} to={to}>{childs} <div className='cir'/></NavLink>
    </LI>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItem;