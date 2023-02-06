// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { AppNav, ToolApp, BtnShop, LogBtn, BtnsMenu, LogoTag, MdBtnMenu, MdBtnShop } from './Navbar.style';
import NavItems from '../NavItems/NavItems';
import logo from '../../../assets/nav-logo.png';
import NavItem from '../NavItem/NavItem';
import NavBag from '../../UI/ICONS/NavBag/NavBag';
import ProfileIndexIcon from '../../UI/ICONS/ProfileIndexIcon/ProfileIndexIcon';
import MenuIcon from '../../UI/ICONS/MenuIcon/MenuIcon';
import { useState } from 'react';
import MenuHover from '../MenuHover/MenuHover';
import { NavLink } from 'react-router-dom';
import { tokenName } from '../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    'محصولات': '/products',
    'درباره ما': '/about-us',
    'ارتباط با ما': '/contact-us',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Navbar = () => {
    // - - - - - - - - - - - - - - //
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    // - - - - - - - - - - - - - - //
    return (
        <AppNav position='static'>
            <ToolApp component='nav'>
                <MenuHover open={open} toggleOpen={toggleOpen} />
                
                <MdBtnMenu onClick={toggleOpen}>
                    <MenuIcon />
                </MdBtnMenu>
                
                <LogoTag src={logo} />

                <NavItems>
                    {Object.entries(configure).map(value => <NavItem key={value[1]} to={value[1]}>{value[0]}</NavItem>)}
                </NavItems>

                <BtnsMenu>
                    <BtnShop component={NavLink} to='/card'>
                        <NavBag />
                    </BtnShop>
                    <LogBtn component={NavLink} to={localStorage.getItem(tokenName)?'profile/show':'/signup'} variant="outlined" startIcon={<ProfileIndexIcon />}>{!localStorage.getItem(tokenName)?'ثبت نام':'پروفایل'}</LogBtn>
                </BtnsMenu>

                <MdBtnShop component={NavLink} to='/card'>
                    <NavBag style={{
                        width: '40px',
                        height: '22px'
                    }} />
                </MdBtnShop>
            </ToolApp>
        </AppNav>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Navbar;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //