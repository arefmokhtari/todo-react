// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { url } from '../api/config';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const en2fa = num => parseInt(num).toLocaleString('fa-IR').replace(/\٬/g, ',');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const configErrors = {
    84: 'دیتا یافت نشد',
    404: 'یافت نشد',
    500: 'خطای سرور',
    429: 'درخواست شما بیش از حد اندازه است'
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const handlerError = (status, nav, toast, anyconfig = {}) => {
    if(status === 401){
        localStorage.removeItem('token');
        toast.error('شما نیاز به احراز هویت دارید!');
        nav('/login');
        return true;
    }
    toast.error(
        { ... configErrors, ... anyconfig }[status] || 'درخواست امکان پذیر نبود'
    );
    return false;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const type = value => value?.constructor.name.toLowerCase();
// - - - - -
export const trimIfString = val => type(val) === 'string'?val.trim():val;
// - - - - -
export const empty = value => { // object , array , string , any false =| ...

    switch(type(value)){
        case 'object': return empty(Object.keys(value));

        case 'array': return value.length === 0;

        case 'string': return value.trim().length === 0;

        case 'number': return false;

        case undefined: return true;
        
        default: return false;
    }
}
// - - - - -
export const checkDataNotEmpty = data => Object.entries(data).filter(value => !empty(value[1])).reduce((o, e) => ((o[e[0]] = trimIfString(e[1])), o), {});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const enDate2FaDate = dateString => {
    let date = new Date(dateString);
    
    let time = enNum2FaNum(date.toLocaleTimeString());
    time = time.search(/\W+pm/i) !== -1 ?time.replace('PM', 'بعد از ظهر'):time.replace('AM', 'صبح')

    return `${date.toLocaleDateString('fa-IR')} - ${time}`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const enNum2FaNum = num => num.replace(
    /([0-9])/g,
    value => '۰۱۲۳۴۵۶۷۸۹'.charAt(value)
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const objectToargGetMethod = object => Object.entries(object).map(value => `${value[0]}=${value[1]}`).join('&');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const fileApi = file => `${url}/${file}`;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const pageinCal = (count, skip = 10) => parseInt((count||0)/skip)+(count<skip || count%skip!=0?1:0);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const sliderCount = (count, step) => count < step ? step - count : count % step;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //