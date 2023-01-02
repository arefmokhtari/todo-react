
import { Select, styled } from '@mui/material';


export const Sele = styled(Select)(({theme}) => ({
    '& fieldset': {
        borderRadius: '16px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#71D0A0',
    },

    '&.Mui-focused .MuiInputLabel-outlined': {
        color: '#71D0A0',
    },
}));