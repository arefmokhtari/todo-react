// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';
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
            <CircularProgress sx={{color: '#71D0A0'}} />
        </Backdrop>
        ,document.getElementById('portal')
    )
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //