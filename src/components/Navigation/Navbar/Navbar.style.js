// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { AppBar, Button, IconButton, styled, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const AppNav = styled(AppBar)(({theme}) => ({
    boxShadow: '0px 0px 16px rgba(77, 196, 136, 0.25)',
    [theme.breakpoints.down('md')]: {
        boxShadow: '0px 0px 0px 0',
    },
}));
// - - - - - - - //
export const ToolApp = styled(Toolbar)(({theme}) => ({
    height: '80px',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}));
// - - - - - - - //
export const BtnShop = styled(IconButton)({
    backgroundColor: '#4DC488 !important',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    marginRight: '16px',
});
// - - - - - - - //
export const LogBtn = styled(Button)({
    color: '#4DC488',
    border: '1px solid #4DC488',
    '&:hover': {
        border: '1px solid #4DC488',
    },
    fontSize: '16px',
    width: '110px',
    height: '40px',
    
    borderRadius: '8px',
});
// - - - - - - - //
export const BtnsMenu = styled(Box)(({theme}) => ({
    position: 'absolute',
    right: '1.7%',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
// - - - - - - - //
export const LogoTag = styled('img')({
    width: '132px',
});
// - - - - - - - //
export const MdBtnMenu = styled(IconButton)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));
// - - - - - - - //
export const MdBtnShop = styled(IconButton)(({theme}) => ({
    backgroundColor: '#4DC488 !important',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //