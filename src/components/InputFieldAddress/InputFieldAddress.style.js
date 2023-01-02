
import { styled, TextField, Button } from '@mui/material';



export const Form = styled('form')``;


export const FieldAddress = styled(TextField)(({theme, error}) => ({
    width: '100%',
    '& label.MuiFormLabel-root': {
        fontSize: '19px',
        paddingLeft: '4px',
        backgroundColor: 'white',
    },
    '& fieldset': {
        borderRadius: '16px',
    },
    '& label.Mui-focused': {
        color: error?'#d32f2f':'#71D0A0',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #C0C0C0',
        },
        '&:hover fieldset': {
            border: `3px solid  ${error?'#d32f2f':'#C0C0C0'}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: error?'#d32f2f':'#71D0A0',
        },
    },
    [theme.breakpoints.down('md')]: {
        '& label.MuiFormLabel-root': {
            fontSize: '16px',
        },
    },
}));

export const BtnAdd = styled(Button)({
    margin: 'auto', 
    display: 'block',
    boxShadow: '0 0 0 0 !important',
    backgroundColor: '#71D0A0 !important',
    width: '300px',
});