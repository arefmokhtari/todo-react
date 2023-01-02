// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box } from '@mui/material';
import { InputField } from './InputFromLogin.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputFromLogin = ({ Icon , sx: st , ... props }) => (
    <Box sx={{width: '91%', margin: 'auto'}} dir='rtl'>
        <InputField 
            {... props} 
            variant="outlined" 
            InputProps={{endAdornment: Icon}}
            sx={{
                '& label.Mui-focused': {
                    color: props.error?'#d32f2f':'#71D0A0',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: '2px solid #C0C0C0',
                    },
                    '&:hover fieldset': {
                        border: `3px solid  ${props.error?'#d32f2f':'#C0C0C0'}`,
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: props.error?'#d32f2f':'#71D0A0',
                    },
                },
                ... st
            }}
        />
    </Box>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputFromLogin;