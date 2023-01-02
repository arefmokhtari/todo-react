
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Sele } from './SelectOp.style';

const SelectOp = ({ children, id, label, ...kwargs }) => (
    <FormControl fullWidth sx={{
        "& label.Mui-focused": {
            color: '#71D0A0',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #C0C0C0',
            },
            '&:hover fieldset': {
                border: `3px solid  ${kwargs.error?'#d32f2f':'#C0C0C0'}`,
            },
            '&.Mui-focused fieldset': {
                borderColor: kwargs.error?'#d32f2f':'#71D0A0',
            },
          },
    }}>
        <InputLabel sx={{
            "& label.Mui-focused": {
                color: 'red',
              },
        }} id={id}>{label}</InputLabel>
        <Sele
          labelId={id}
          {...kwargs}
          label={label}
        >
            {children}
        </Sele>
    </FormControl>

);


export default SelectOp;