// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Button, FormHelperText, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const BtnFile = styled(Button)(({error}) => ({
    border: `2px solid ${error?'#d32f2f':'#71D0A0'} !important`,
    color: error?'#d32f2f':'#71D0A0',
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputFile = ({ children, error, onChange,sx,helperText, ...kwargs }) => ( 
    <Box sx={sx}>
        <BtnFile
            variant='outlined'
            component='label'
            endIcon={<AddIcon />}
            error={error?error.toString():''}
            sx={{width: sx.width?{... sx.width, xs: '100%'}:'100%', height: '100%'}}
            {... kwargs}
        >
            {children}
            <Typography component='input'
                type='file'
                hidden
                onChange={onChange}
            />
        </BtnFile>
        <FormHelperText sx={{color: '#d32f2f'}}>{helperText}</FormHelperText>
    </Box> 
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputFile;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //