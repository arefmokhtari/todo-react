// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { styled, Box, Chip } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const MainShow = styled(Box)({
    width: '100%',
    height: 'auto',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',
    padding: '5px',
    borderRadius: '4px',
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const BoxShow = styled(Box)({
    width: '96%',
    height: 'auto',
    borderBottom: '1px solid #71D0A0',
    margin: '2px auto',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const IconShow = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '40px',  
    [theme.breakpoints.down('sm')]: {
        paddingRight: '1%'
    },
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const MsgIcon = styled(Chip)({
    backgroundColor: 'white',
    padding: '10px',
    margin: '10px',
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //