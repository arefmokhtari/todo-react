// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useContext, useEffect } from 'react';
import { Load } from '../contexts/Load';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useLoading = (delay = 500) => {
    const load = useContext(Load);
    return useEffect(() => {
        load(true);
        setTimeout(() => {
            load(false);
        }, delay);
        
    }, []);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //