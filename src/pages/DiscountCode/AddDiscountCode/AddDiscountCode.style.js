

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

export const InputField = styled(props => <TextField variant='standard' {...props} />)(({error}) => ({
    width: '100% !important',
    //margin: '5px'
    '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${error?'#d32f2f':'#71D0A0'} !important`,
    },
    '& .Mui-focused': {
        '& .MuiSvgIcon-root': {
            color: `${error?'#d32f2f':'#71D0A0'} !important`,
        },
    },
    '& label.Mui-focused': {
        color: error?'#d32f2f':'#71D0A0',
        '& .MuiSvgIcon-root': {
            color: `${error?'#d32f2f':'#71D0A0'} !important`,
        },
    },
}));