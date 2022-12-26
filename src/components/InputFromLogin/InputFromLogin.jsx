// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, styled, TextField } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputField = styled(TextField)(({ theme }) => ({
    padding: '4px 0 !important',
    width: '100%',
    height: '80px',
    marginBottom: '16px',
    '& label.MuiFormLabel-root': {
        fontSize: '19px',
        paddingLeft: '4px',
    },
    '& fieldset': {
        borderRadius: '16px',
    },
    [theme.breakpoints.down('md')]: {
        height: '56px',
        marginBottom: '30px',
        '& label.MuiFormLabel-root': {
            fontSize: '19px',
        },
    },

}));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputFromLogin = ({ Icon , ... props }) => (
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
            }}
        />
    </Box>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputFromLogin;