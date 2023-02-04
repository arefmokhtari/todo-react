// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';
import { LinearProgress, Typography } from '@mui/material';
import logo from '../../../assets/nav-logo.png'
import { Box } from '@mui/system';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Loading = props => (
    createPortal(
        <Backdrop {... props} sx={{zIndex: 9999}}>
            <LinearProgress color='success' sx={{
                width: '100%', position: 'absolute', top: '0',
                '& .css-1u7opxh-MuiLinearProgress-bar1':{
                    backgroundColor: '#71D0A0 !important',
                },
            }} />
            <Box sx={{
                width: '300px',
                height: '200px',
                background: 'white',
                border: '8px solid #71D0A0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Typography component='img' src={logo} sx={{width: '132px', marginBottom: '15px'}} />
                <CircularProgress sx={{color: '#71D0A0'}} />
            </Box>
        </Backdrop>
        ,document.getElementById('portal')
    )
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //