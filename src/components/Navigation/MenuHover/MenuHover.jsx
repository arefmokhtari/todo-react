// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Drawer, Box, List, ListItem, styled } from '@mui/material';
import { LogoTag, LogBtn } from '../Navbar/Navbar.style';
import logo from '../../../assets/nav-logo.png';
import ProfileIndexIcon from '../../UI/ICONS/ProfileIndexIcon/ProfileIndexIcon';
import { NavLink } from 'react-router-dom';
import { tokenName } from '../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Nav = styled(NavLink)({
    width: '100%',
    paddingTop: '12px',
    paddingBottom: '12px',
    textDecoration: 'none',
    borderBottom: '1px solid #000000',
    color: '#434343',
});
const configure = {
    'صفحه اصلی': '/',
    'محصولات': '/sdfsdf',
    'درباره ما': '/about-us',
    'ارتباط با ما': '/contact-us',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const MenuHover = ({open, toggleOpen}) => (
    <Drawer
        anchor="right"
        PaperProps={{
            sx: {
                right: 'unset !important',
                left: '0 !important',
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px'
            }
        }}
        open={open}
        onClose={toggleOpen}
    >
        <Box role="presentation" sx={{
            width: '310px',
            }}>
            <LogoTag src={logo} sx={{margin: 'auto', marginTop: '50px',display: 'block'}} />
            <List sx={{width: '134px',margin: 'auto'}}>
            {
            Object.entries(configure).map(value => 
                <ListItem key={value[0]} disablePadding>
                    <Nav to={value[1]} style={({isActive}) => (isActive?{color: '#4DC488', borderBottom: '1px solid #4DC488',}:{})}>
                        {value[0]}
                    </Nav>
                </ListItem>
                )
            }

                <LogBtn variant="outlined" to={localStorage.getItem(tokenName)?'profile/show':'/signup'} component={NavLink} startIcon={<ProfileIndexIcon />} sx={{margin: 'auto',marginTop: '60px',fontSize: '14px', width: '134px'}}>{!localStorage.getItem(tokenName)?'ثبت نام':'پروفایل'}</LogBtn>

            </List>
        </Box>
    </Drawer>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default MenuHover;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //