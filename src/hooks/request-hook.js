
// - - - - - - - - - - - [ plague Dr ] - - - - - - - - - - - - //
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setToken } from '../api/requests';
import { handlerError, objectToargGetMethod } from '../utils/plugins';
import { useLoadingByFunc } from './loading-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const tokenName = 'token';
const configure = { // [ plague dr ] - doc
    // مقادیر اولیه فراخوانی هوک عبارتند از: مقدار درنظر نگرفتن توکن و مقدار استارت ریکوئست های هوک
    request: async () => {}, // تابع ریکوئست
    errorArg: {}, // در صورت بروز خطا با کدی غیر از کانفیگ فراخوانی میشود
    args: [], // مقادیری که باید در تابع ریکوئست قرار بگیرند، به صورت لیست
    successText: '', // در صورت لزوم متن پیامی دیگر در حالت موفقیت امیز، در توست اعمال میشود
    success: req => {}, // در زمان موفقیت امیز بودن ریکوئست، این تابع فراخوانی میشود
    showMessage: false, // بای دیفالت پیامی نشان داده نمیشود، در صورت لزوم این کلید را ترو کنید
    start: false, // زمانی که یک ریکوئست انجام میشود، آیا لازم است توابع استارت هوک دوباره ریکوئست داده شوند؟
    state: {}, // مربوط به هوک یوز لیمیت اسکیپ میشباشد
    // start hook:
    requestName: '', // در زمان ساخت هوک چه تابع داخلی با چه اسمی فراخوانی شود. الزامی
    oneStart: false, // توابعی که در زمان ساخت هوک لازمند فقط یک بار فراخوانی شوند
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useRequest = ({ ingnoreToken = false, start = [configure] }) => {
    // - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - // 
    const handlerStart = async (one = true) => // به دلیل آنکه ممکن است در زمان استارت چندین درخواست وچود داشته باشد در درون یک مپ قرار میگیرد
    await Promise.all(start?.map(value => [request, requestByLoading, requestByLoadingAndToken].find(func => func.name === value.requestName && (!value.oneStart || one))?.(value)));
    const handlerOneStart = async () => await handlerStart(false);
    // - - - - - - - - - //
    const useLimitSkip = (conf = configure) => {
        const [skip, setSkip] = useState(conf.state || {
            limit: 10,
            skip: 0,
        });
        //
        useEffect(() => {
            (async () => {
                await requestByLoadingAndToken({ ... conf, args: ['?'+objectToargGetMethod(skip)] });
            })();
        }, [skip]);
        //
        return [skip, setSkip];
    }
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
            config.success?.(req);
            config.showMessage && toast.success(config.successText || 'انجام شد');
        }else handlerError(req.status, nav, toast, config.errorArg);
    }
    // - - - - - - - - - //
    const requestByLoading = async (config = configure, anyFunc = () => {}) => await loading(async () => {anyFunc?.();await request(config)});
    const requestByLoadingAndToken = async (config = configure) => await requestByLoading(config, () => setToken(localStorage.getItem(tokenName)));
    // - - - - - - - - - //
    return {
        requestByLoading,
        request,
        nav,
        loading,
        requestByLoadingAndToken,
        useLimitSkip,
    }
    // - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //