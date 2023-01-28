// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, Typography, Box, Button, TextField, Grid } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const BoxIcon = styled(Box)(({theme}) => ({
    width: '112px',
    height: '112px',
    border: '2px solid #D9D9D9',
    borderRadius: '79px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '79px',
    right: '0',
    left: '0',
    margin: '0 auto',
    backgroundColor: 'white',
    top: '-56px',
    [theme.breakpoints.down('md')]: {
        width: '84px',
        height: '84px',
        top: '-40px',
    },
}));

export const ShowLabel = styled(props => <Typography {...props} component='h1' variant='p' />)(({theme}) => ({
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '48px',
    color: '#71D0A0',
    textAlign: 'center',
    position: 'relative',
    marginTop: '76px',
    zIndex: '10',
    '&::after': {
        content: '" "',
        width: '28%',
        position: 'absolute',
        height: '2px',
        background: '#E2E2E2',
        top: '23px',
        left: '8%',
        zIndex: '-1',
    },
    '&::before': {
        content: '" "',
        width: '28%',
        position: 'absolute',
        height: '2px',
        background: '#E2E2E2',
        top: '23px',
        right: '8%',
        zIndex: '-1',
    },
    [theme.breakpoints.down('md')]: {
        '&::after': {
            width: '28%',
            left: '5%',
        },
        '&::before': {
            width: '28%',
            right: '5%',
        },
    },
    [theme.breakpoints.down('sm')]: {
        '&::after': {
            width: '24%',
            left: '4%',
        },
        '&::before': {
            width: '24%',
            right: '4%',
        },
    }
}));

export const BtnSend = styled(Button)(({theme}) => ({
    width: '144px',
    height: '48px',
    background: '#71D0A0 !important',
    borderRadius: '4px',
    boxShadow: '0 0 0 0',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19px',
    [theme.breakpoints.down('md')]: {
        width: '111px',
        height: '40px',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '17px',
    },
}));

export const Text = styled(({error, ...kwargs}) => <TextField {...kwargs}/>)(({error}) => ({
    background: '#FCFCFC',
    '& .MuiFormHelperText-root': {
        color: `${error?'#d32f2f':'#71D0A0'} !important`,
    },
    '& fieldset': {
        borderRadius: '4px',
    },
    '& label.Mui-focused': {
        color: `${error?'#d32f2f':'#71D0A0'} !important`,
    },
    '& label.MuiFormLabel-root': {
        color: error?'#d32f2f':'#A9A9A9',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `1px solid ${error?'#d32f2f':'#E2E2E2'}`,
        },
        '&:hover fieldset': {
            border: `2px solid  ${error?'#d32f2f':'#E2E2E2'}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: error?'#d32f2f':'#71D0A0',
        },
    },
}));

export const GridInput = styled(Grid)({
    border: '2px solid #D9D9D9',
    borderRadius: '16px',
});


export const ItemBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '96px',
    border: '2px solid #D9D9D9',
    borderRadius: '16px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: '16px',
    },
}));

export const ItemIconBox = styled(Box)(({}) => ({
    width: '72px',
    height: '72px',
    background: '#4DC488',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 12px',
}));

export const LabelHead = styled(props => <Typography component='h1' {...props}/>)(({}) => ({
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#727272',
}));

export const LabelBody = styled(props => <Typography paragraph {...props}/>)(({}) => ({
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    marginBottom: '2px',
    color: '#4F4F4F',
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //