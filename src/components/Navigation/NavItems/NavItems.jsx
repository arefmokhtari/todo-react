// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import './NavItems.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const NavItems = ({ children }) => (
    <ul className='nav-items'>
        {children}
    </ul>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NavItems;