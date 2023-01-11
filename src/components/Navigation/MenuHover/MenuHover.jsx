// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Drawer, Box, List, ListItem, styled } from '@mui/material';
import { LogoTag, LogBtn } from '../Navbar/Navbar.style';
import logo from '../../../assets/nav-logo.png';
import ProfileIndexIcon from '../../UI/ICONS/ProfileIndexIcon/ProfileIndexIcon';
import { NavLink } from 'react-router-dom';
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
    'درباره ما': '/test',
    'ارتباط با ما': '/testt',
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
            width: '250px',
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
            <ListItem>
                <LogBtn variant="outlined" startIcon={<ProfileIndexIcon />} sx={{marginTop: '60px'}}>ثبت نام</LogBtn>
            </ListItem>
            </List>
        </Box>
    </Drawer>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default MenuHover;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //