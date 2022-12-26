// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { useState } from 'react';
import Load from '../../../../contexts/load-context';
import Loading from '../Loading';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoad] = useState(false);

    return (
        <Load.Provider value={setIsLoad}>
            {children}
            <Loading open={isLoading} />
        </Load.Provider>
    );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default LoadingProvider;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //