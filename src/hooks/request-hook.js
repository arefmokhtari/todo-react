// - - - - - - - - - - - [ plague Dr ] - - - - - - - - - - - - //
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setToken } from '../api/requests';
import { handlerError, objectToargGetMethod } from '../utils/plugins';
import { useLoadingByFunc } from './loading-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const tokenName = 'token';
const configure = { // - - - - - - [ plague dr ] - - - - - - - // - doc
    // مقادیر اولیه فراخوانی هوک عبارتند از: مقدار درنظر نگرفتن توکن و مقدار استارت ریکوئست های هوک
    request: async () => {},    // تابع ریکوئست
    errorArg: {},               // در صورت بروز خطا با کدی غیر از کانفیگ فراخوانی میشود
    args: [],                   // مقادیری که باید در تابع ریکوئست قرار بگیرند، به صورت لیست
    successText: '',            // در صورت لزوم متن پیامی دیگر در حالت موفقیت امیز، در توست اعمال میشود
    success: (req, output) => {},         // در زمان موفقیت امیز بودن ریکوئست، این تابع فراخوانی میشود
    showMessage: false,         // بای دیفالت پیامی نشان داده نمیشود، در صورت لزوم این کلید را ترو کنید
    start: false,               // زمانی که یک ریکوئست انجام میشود، آیا لازم است توابع استارت هوک دوباره ریکوئست داده شوند؟
    state: {},                  // مربوط به هوک یوز لیمیت اسکیپ میباشد
    // start hook:
    requestName: '',            // در زمان ساخت هوک چه تابع داخلی با چه اسمی فراخوانی شود. الزامی
    oneStart: false,            // توابعی که در زمان ساخت هوک لازمند فقط یک بار فراخوانی شوند
}
export const requestName = {
    DEFAULT:'request',
    BYTOKEN: 'requestByToken',
    BYLOADING: 'requestByLoading',
    BYLOADINGANDTOKEN: 'requestByLoadingAndToken',
}
export const defaultSkip = { limit: 10, skip: 0 }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useRequest = ({ ingnoreToken = false, start = [configure] }) => {
    // - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - // 
    const findRequestByName = (name, anyCheck = true) => [request, requestByToken, requestByLoading, requestByLoadingAndToken].find(func => func.name == name && anyCheck);
    const handlerStart = async (one = true) => // به دلیل آنکه ممکن است در زمان استارت چندین درخواست وچود داشته باشد در درون یک مپ قرار میگیرد
    await Promise.all(start?.map(value => findRequestByName(value.requestName, !value.oneStart || one)?.(value)));
    const handlerOneStart = async () => await handlerStart(false);
    // - - - - - - - - - //
    useEffect(() => {
        if(!ingnoreToken && !localStorage.getItem(tokenName)) nav('/login');
        else (async () => {
            start && await handlerStart();
        })();
    }, []);
    // - - - main  - - - //
    const request = async (config = configure) => {
        const req = await config.request(... config.args || []);
        // console.log(req);
        config.start && await handlerOneStart();
        if(req.ok){
            config.success?.(req, output);
            config.showMessage && toast.success(config.successText || 'انجام شد');
        }else handlerError(req.status, nav, toast, config.errorArg);
    }
    // - - - - - - - - - //
    const reRender = async (index, args = configure) => await findRequestByName(args.requestName || start.at(index).requestName)({... start.at(index), ... args}); 
    const requestByToken = async (config = configure) => {setToken(localStorage.getItem(tokenName));return await request(config)};
    const requestByLoading = async (config = configure) => await loading(async () => await request(config));
    const requestByLoadingAndToken = async (config = configure) => {setToken(localStorage.getItem(tokenName));return await requestByLoading(config)};
    // - - - - - - - - - //
    const output = {
        reRender,
        requestByLoading,
        request,
        nav,
        loading,
        requestByLoadingAndToken,
        requestByToken,
        findRequestByName,
    }
    return output;
    // - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useLimitSkip = (conf = configure, stateRequest = { ingnoreToken: false, start: [configure] }) => {
    const request = useRequest(stateRequest);
    const [skip, setSkip] = useState(conf.state || defaultSkip);
    // 
    const movePageHandler = value => 
        value != skip.skip / 10 + 1 &&
            setSkip(preState => ({... preState, skip: (value-1)*skip.limit}));
    // 
    useEffect(() => {
        (async () => {
            await request.findRequestByName(conf.requestName || requestName.BYLOADINGANDTOKEN)?.({ ... conf, args: ['?'+objectToargGetMethod(skip)] });
        })();
    }, [skip]);
    //
    return {
        ...request,
        skip,
        setSkip,
        movePageHandler
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //