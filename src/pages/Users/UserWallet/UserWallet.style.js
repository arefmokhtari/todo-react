
import { styled, FormControl } from '@mui/material';
import { Text } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';

export const Sele = styled(FormControl)(({}) => ({
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

export const fromCreatedText = styled(props => <Text />)({
    margin: '0 auto', 
    width: '100% !important',
});