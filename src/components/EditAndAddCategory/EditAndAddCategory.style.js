// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, TextField, FormControl, Button } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const Text = styled(TextField)(({theme, error}) => ({
    margin: '20px auto', 
    width: '350px',
    [theme.breakpoints.down('xl')]: {
        width: '300px',
    },
    [theme.breakpoints.down('lg')]: {
        width: '250px',
    },
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
    '& label.MuiFormLabel-root': {
        color: error?'#d32f2f':'rgba(0, 0, 0, 0.6)',
    },
    '& label.Mui-focused': {
        color: error?'#d32f2f':'#71D0A0',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `2px solid ${error?'#d32f2f':'#C0C0C0'}`,
        },
        '&:hover fieldset': {
            border: `3px solid  ${error?'#d32f2f':'#C0C0C0'}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: error?'#d32f2f':'#71D0A0',
        },
    },
}));
export const Sele = styled(FormControl)(({theme}) => ({
    margin: '19px auto',
    width: '400px',
    [theme.breakpoints.down('xl')]: {
        width: '350px',
    },
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
    "& label.Mui-focused": {
        color: '#71D0A0',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #C0C0C0',
        },
        '&:hover fieldset': {
            border: `3px solid  #C0C0C0`,
        },
        '&.Mui-focused fieldset': {
            borderColor: '#71D0A0',
        },
      },
}));
export const InBtn = styled(Button)(({theme}) => ({
    width: '400px',
    [theme.breakpoints.down('xl')]: {
        width: '350px',
    },
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
    fontSize: '20px',
    margin: '20px auto',
    backgroundColor: '#71D0A0 !important',
    boxShadow: '0 0 0 0'
}));

export const BackBtn = styled(Button)(({theme}) => ({
    color: 'white',
    position: 'absolute',
    backgroundColor: '#71D0A0 !important',
    width: '100px',
    right: '20px',
    [theme.breakpoints.down('sm')]: {
        width: '50px',
        height: '30px',
    }
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //