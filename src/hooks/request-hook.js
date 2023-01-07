
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setToken } from '../api/requests';
import { handlerError } from '../utils/plugins';
import { useLoadingByFunc } from './loading-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    request: async () => {},
    requestName: '',
    errorArg: {},
    args: [],
    successText: '',
    success: req => {},
    showMessage: false,
    start: false,
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useRequest = ({ ingnoreToken = false, start = configure }) => {
    // - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - //
    const handlerStart = async () => await [request, requestByLoading, requestByLoadingAndToken].find(v => v.name === start.requestName)(start);
    // - - - - - - - - - //
    useEffect(() => {
        if(!ingnoreToken && !localStorage.getItem('token')) nav('/login');
        else (async () => {
            start.requestName && await handlerStart();
        })();
    }, [ingnoreToken]);
    // - - - - - - - - - //
    const request = async (config = configure) => {
        const req = await config.request(... config.args || []);

        config.start && await handlerStart();
        if(req.ok){
            config.success?.(req);
            config.showMessage && toast.success(config.successText || 'انجام شد');
        }else handlerError(req.status, nav, toast, config.errorArg);
    }
    // - - - - - - - - - //
    const requestByLoading = async (config = configure) => await loading(async () => await request(config));
    const requestByLoadingAndToken = async (config = configure) => await loading(async () => {setToken(localStorage.getItem('token'));await request(config)});
    // - - - - - - - - - //
    return {
        requestByLoading,
        request,
        nav,
        loading,
        requestByLoadingAndToken,
    }
    // - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //