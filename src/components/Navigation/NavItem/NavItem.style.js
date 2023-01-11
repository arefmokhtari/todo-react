

import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const LI = styled('li')({
    listStyle: 'none',
    height: '100%',
    '& > a': {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#434343',
        padding: '0 18px',
        height: '100%',
        fontSize: '16px',
        marginRight: '23px',
        position: 'relative',
    }
});
const Nav = styled(NavLink)({
    '&:hover': {
        color: '#4DC488 !important',
        '& div': {
            width: '8px',
            height: '8px',
            borderRadius: '10px',
            position: 'absolute',
            background: '#4DC488',
            left: '45%',
            right: '55%',
            marginLeft: 0,
            marginRight: 0,
            bottom: '10%',
        }
    },
});