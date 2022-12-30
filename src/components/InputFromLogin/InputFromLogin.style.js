// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, TextField } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const InputField = styled(TextField)(({ theme }) => ({
    padding: '4px 0 !important',
    width: '100%',
    height: '80px',
    marginBottom: '10px',
    '& label.MuiFormLabel-root': {
        fontSize: '19px',
        paddingLeft: '4px',
    },
    '& fieldset': {
        borderRadius: '16px',
    },
    [theme.breakpoints.down('md')]: {
        height: '56px',
        marginBottom: '26px',
        '& label.MuiFormLabel-root': {
            fontSize: '19px',
        },
    },

}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //