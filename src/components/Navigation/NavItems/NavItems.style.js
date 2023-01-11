// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const UL = styled('ul')(({theme}) => ({
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    marginLeft: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //