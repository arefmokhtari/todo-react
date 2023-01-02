// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Loading = props => (
    createPortal(
        <Backdrop {... props} sx={{zIndex: 9999}}>
            <CircularProgress />
        </Backdrop>
        ,document.getElementById('portal')
    )
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //