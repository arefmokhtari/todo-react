// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, Typography, Grid, Box } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const TagShow = styled(({whiteColor, ...props}) => <Typography component='h1' {...props} />)(({whiteColor, theme}) => ({
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '28px',
    },
}));

export const GridItems = styled(Grid)(({theme, isActive}) => ({
    position: 'relative',
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    zIndex: '10',
}));

export const BoxAbs = styled(Box)(({}) => ({
    position: 'absolute',
    top: '0',
    width: '1px',
    height: '80%',
    right: '0',
    bottom: '0',
    background: '#D0D0D0',
    marginTop: 'auto',
    marginBottom: 'auto',
    zIndex: '-1',
}));

export const BoxCategory = styled(Box)(({}) => ({
    width: '100%',
    height: '376px',
    background: 'red',
    position: 'sticky',
    top: '40px',
    background: '#F5F5F5',
    borderRadius: '8px',
    overflow: 'hidden',
}));

export const BoxLabelCategory = styled(Box)(({}) => ({
    width: '100%', 
    height: '56px', 
    background: '#4DC488', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    '& *': {
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '28px',
        color: '#FFFFFF',
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //