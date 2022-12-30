// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Button, styled } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const LogBtn = styled(Button)(({ theme }) => ({
    display: 'block !important',
    margin: 'auto',
    width: '91%',
    height: '60px',
    backgroundColor: '#71D0A0 !important',
    margin: 'auto',
    fontSize: '27px !important',
    paddingBottom: '6px',
    boxShadow: '0 0 0 0 !important',
    borderRadius: '16px !important',
    [theme.breakpoints.down('md')]: {
        height: '50px',
        fontSize: '22px !important',
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //