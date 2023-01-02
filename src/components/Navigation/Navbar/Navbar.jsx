// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { Typography } from '@mui/material';
import { AppNav, ToolApp } from './Navbar.style';
import NavItems from '../NavItems/NavItems';
import logo from './TEXT.png';
import NavItem from '../NavItem/NavItem';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    'محصولات': '/',
    'درباره ما': '/test',
    'ارتباط با ما': '/testt',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Navbar = () => {

    return (
        <AppNav position='sticky'>
            <ToolApp component="nav">
                <Typography component='img' src={logo} sx={{width: '132px'}} />
                <NavItems>
                    {Object.entries(configure).map(value => <NavItem key={value[1]} to={value[1]}>{value[0]}</NavItem>)}
                </NavItems>
            </ToolApp>
        </AppNav>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Navbar;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //