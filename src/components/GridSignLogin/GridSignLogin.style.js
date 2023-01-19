// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, styled } from '@mui/material';
import { Box } from '@mui/system';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const ImageGrid = styled(Grid)(({theme}) => ({
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
        height: '23vh',
    },
}));

export const GridInput = styled(Grid)({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 'auto',
});

export const ChildrenBox = styled(Box)(({theme}) => ({
    width: '98%',
    height: 'auto',
    direction: 'ltr',
    '& h1': {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '60px',
        color: '#525252',
        width: '91%',
        margin: 'auto',
        marginBottom: '12px',
    },
    '& p': {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '180%',
        textAlign: 'center',
        color: '#707070',
        width: '91%',
        margin: 'auto',
        marginBottom: '26px',
    },
    [theme.breakpoints.down('md')]: {
        '& p': {
            marginBottom: '26px',
            fontSize: '12px',
        },
        '& h1': {
            fontSize: '24px',
        },
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //