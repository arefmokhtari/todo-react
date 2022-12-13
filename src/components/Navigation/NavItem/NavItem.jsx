// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import './NavItem.css';
import { NavLink } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const NavItem = ({link, children: childs}) => (
    <li className='nav-item'>
        <NavLink style={({isActive}) => ({borderBottom: isActive?'3px solid rgb(218, 178, 255)':'none'})} to={link}>{childs}</NavLink>
    </li>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItem;