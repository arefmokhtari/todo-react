
import { styled, Box, Chip } from '@mui/material';


export const ShowAdd = styled(Box)({
    width: '95%',
    borderBottom: '2px solid #dfdfdf',
    margin: '15px auto',
});

export const MsgIcon = styled(Chip)(({theme}) => ({
    backgroundColor: 'white',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));