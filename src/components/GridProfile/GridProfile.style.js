
import { styled, Box, Button } from '@mui/material';


export const BoxMovePage = styled(Box)({
    
    background: '#F5F5F5',
    borderRadius: '8px',
    marginTop: '50px',
});

export const BtnLink = styled(Button)(({theme}) => ({
    position: 'relative',
    height: '64px',
    color: '#434343',
    width: '25%',
    [theme.breakpoints.down('md')]: {
        width: '50%',
    },
    // borderRight: '1.5px solid #D0D0D0',
}));

export const ShowBox = styled(Box)({
    marginTop: '50px',
    border: '2px solid #D9D9D9',
    borderRadius: '8px',
    position: 'relative',
});

export const ShowMsg = styled('span')({

    padding: '0 20px',
    borderBottom: '2px solid #71D0A0',
    marginLeft: '30px',
});