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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    'محصولات': '/',
    'درباره ما': '/test',
    'ارتباط با ما': '/testt',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Navbar = () => {
    // - - - - - - - - - - - - - - //
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    // - - - - - - - - - - - - - - //
    return (
        <AppNav position='sticky'>
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
                    <BtnShop>
                        <NavBag />
                    </BtnShop>
                    <LogBtn variant="outlined" startIcon={<ProfileIndexIcon />}>ثبت نام</LogBtn>
                </BtnsMenu>

                <MdBtnShop>
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