// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import  { createContext } from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Confirm = createContext({
    start: () => {},
    close: () => {},
    setClick: (state = {
        onClick: () => {},
        onClose: () => {},
    }) => {},
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default Confirm;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //