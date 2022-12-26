// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useContext, useEffect } from 'react';
import Load from '../contexts/load-context';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const useLoadingByTime = (delay = 500) => {
    const load = useContext(Load);
    useEffect(() => {
        load(true);
        setTimeout(()=> load(false), delay);
    },[delay]);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useLoadingByBool = isLoading => {
    const load = useContext(Load);
    useEffect(() => {
        load(isLoading);
    },[isLoading]);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useLoadingByFunc = () => {
    const load = useContext(Load);

    const loading = async func => {
        load(true);
        await func();
        load(false);
    }
    return loading;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //