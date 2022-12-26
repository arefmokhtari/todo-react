// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';
import { useState } from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Loading = props => (
    createPortal(
        <Backdrop {... props}>
            <CircularProgress />
        </Backdrop>
        ,document.getElementById('portal')
    )
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Loading;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //