// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, Grid, Box, Button, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const GridShowAboutUs = styled(Grid)(({}) => ({
    margin: 'auto',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',
    borderRadius: '4px',

}));

export const Image = styled(LazyLoadImage)(({}) => ({
    width: '100%',
    borderRadius: '4px',
}));

export const GridShowItems = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
    },
}));

export const BoxShowText = styled(Box)(({theme}) => ({
    width: '90%',
    margin: 'auto',
    '& *': {
        textAlign: 'justify',
        color: 'rgb(26 24 24 / 87%)',
        fontSize: '16px',
    },
    [theme.breakpoints.down('xl')]: {
        '& *': {
            fontSize: '14px',
        },
    },
    [theme.breakpoints.down('lg')]: {
        '& *': {
            fontSize: '12px',
        },
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

export const Label = styled(props => <Typography component='h1' {...props}/>)(({}) => ({
    fontSize: '32px',
    margin: '10px auto',
}));

export const LabelText = styled(Label)(({}) => ({
    textAlign: 'center !important',
    color: '#71D0A0',
    borderBottom: '1px solid #71D0A0',
    fontSize: '32px !important',
}));

export const EditBox = styled(Box)(({}) => ({
    margin: '20px 0',
}));

export const BtnEdit = styled(Button)(({}) => ({
    borderColor: '#71D0A0 !important',
    color: '#71D0A0',
}));

export const BoxHideImage = styled(Box)({
    position: 'absolute', 
    backgroundColor: '#71D0A0', 
    width: '100%', 
    height: '97.5%', 
    opacity: .3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //