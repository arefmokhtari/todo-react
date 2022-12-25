// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, styled, TextField } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputField = styled(TextField)(() => ({
    padding: '4px 0 !important',
    width: '100%',
    height: '80px',
    '& label.MuiFormLabel-root': {
        fontSize: '19px',
        paddingLeft: '4px',
    },
    '& label.Mui-focused': {
        color: '#71D0A0',
    },
    '& fieldset': {
        borderRadius: '16px',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #C0C0C0',
        },
        '&:hover fieldset': {
            border: '3px solid #C0C0C0',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#71D0A0',
        },
    },
}));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputFromLogin = ({ Icon , ... props }) => (
    <Box sx={{width: '91%', margin: 'auto'}} dir='rtl'>
        <InputField {... props} variant="outlined" InputProps={{
            endAdornment: Icon
        }}/>
    </Box>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputFromLogin;