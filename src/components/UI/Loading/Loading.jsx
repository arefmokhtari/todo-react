// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';
import './Loading.css';
import logo from '../../../assets/nav-logo.png';
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
            <div className='test'>
                <img src={logo} style={{height: '40px', display: 'block', margin: 'auto'}} />
                <CircularProgress sx={{color: '#71D0A0', display: 'block', margin: '30px auto'}} />
            </div>
        </Backdrop>
        ,document.getElementById('portal')
    )
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
