


import { styled } from '@mui/material';

export default styled('div')({
    position: 'relative',
    width: '200px',
    height: '125px',
    backgroundColor: 'white',
    margin: '86.60px 0',
    '& :before, & :after': {
        content: '""',
        position: 'absolute',
        width: '0',
        borderLeft: '100px groove transparent',
        borderRight: '100px groove transparent',
        right: '0',
    },
    '& :before': {
        bottom: '100%',
        borderBottom: '65px groove white',
    },
    '& :after': {
        top: '100%',
        width: 0,
        borderTop: '65px ridge white',
    },
});