// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useContext } from 'react';
import Load from '../contexts/load-context';
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