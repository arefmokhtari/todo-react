

import { styled } from '@mui/material';

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