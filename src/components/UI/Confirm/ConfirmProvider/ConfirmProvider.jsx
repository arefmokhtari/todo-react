// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useState } from 'react';
import Confirm from '../Confirm';
import ConfirmContext from '../../../../contexts/confirm-context';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    onClick: async () => {}, 
    onClose: () => {},
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ConfirmProvider = ({ children }) => {
    // - - - - - - - - - - - - //
    const [show, setShow] = useState(false);
    const [click, setClick] = useState(configure);
    // - - - - - - - - - - - - //
    const start = () => setShow(true);
    const close = () => setShow(false);
    // - - - - - - - - - - - - //
    return ( 
        <ConfirmContext.Provider value={{ start, close, setClick }}>
            <Confirm open={show} {... click}/>
            {children}
        </ConfirmContext.Provider> 
    );
    // - - - - - - - - - - - - //
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ConfirmProvider;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //