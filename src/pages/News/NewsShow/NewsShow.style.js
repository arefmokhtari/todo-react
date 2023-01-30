
import { styled, Typography, } from '@mui/material';

export const ShowLabel = styled(props => <Typography {...props} component='h1' variant='p' />)(({theme}) => ({
    color: '#71D0A0',
    textAlign: 'center',
    position: 'relative',
    background: 'white',
    width: 'max-content',
    padding: '0 15px',
    margin: 'auto',
    marginTop: '76px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));