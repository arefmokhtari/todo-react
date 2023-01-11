// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { LI, Nav} from './NavItem.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const NavItem = ({to, children: childs}) => (
    <LI>
        <Nav to={to}>{childs} <div className='cir'/></Nav>
    </LI>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItem;