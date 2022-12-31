// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, styled as styledmui, Box, Button } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const DivS = styledmui(Box)`
    width: 100%;
    height: 10px;
    background-color: #71D0A0;
    border-radius: 20px;
`;


export const GridTop = styledmui(Grid)({
    height: '35vh',
});

export const Grid4Login = styledmui(Grid)({
    height: '65vh',
});

export const DivLogin = styledmui(Box)(({ theme }) => ({
    width: '800px', 
    height: '330px',
    boxShadow: '0 0 16px 0 rgba(0,0,0, .2)',
    margin: 'auto',
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: {
        width: '90%', 
    }

}));

export const LogBtn = styledmui(Button)(({ theme }) => ({
    display: 'block !important',
    margin: 'auto',
    width: '160px',
    height: '50px',
    color: 'white',
    backgroundColor: '#71D0A0 !important',
    margin: 'auto',
    fontSize: '20px !important',
    paddingBottom: '6px',
    boxShadow: '0 0 0 0 !important',
    borderRadius: '16px !important',
    [theme.breakpoints.down('md')]: {
        height: '50px',
        fontSize: '22px !important',
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //