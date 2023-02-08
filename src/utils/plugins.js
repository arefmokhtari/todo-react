// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { url } from '../api/config';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const e2f = num => parseInt(num).toLocaleString('fa-IR');
export const en2fa = num => e2f(num).replace(/\٬/g, ',');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const configErrors = {
    84: 'دیتا یافت نشد',
    404: 'یافت نشد',
    500: 'خطای سرور',
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
export const enDate2FaDate = (dateString, checkTime = true) => {
    let date = new Date(dateString);
    
    let time = enNum2FaNum(date.toLocaleTimeString());
    time = checkTime?time.search(/\W+pm/i) !== -1 ?time.replace('PM', 'بعد از ظهر'):time.replace('AM', 'صبح'):'';

    return `${date.toLocaleDateString('fa-IR')}${time?` - ${time}`:''}`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const enNum2FaNum = num => num.replace(
    /([0-9])/g,
    value => '۰۱۲۳۴۵۶۷۸۹'.charAt(value)
);
export const faNum2enNum = num => num.replace(
    /[۰-۹]/g,
    value => '۰۱۲۳۴۵۶۷۸۹'.indexOf(value)
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const objectToargGetMethod = object => Object.entries(object).map(value => `${value[0]}=${value[1]}`).join('&');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const objectToFormData = (data, ignore=false) => {
    const form = new FormData();

    Object.entries(data)
        .forEach(item => {
            if(ignore || !empty(item[1])) 
                form.append(... item);
        });
    
    return form;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const checkFormatFile = (formats, fileName) => formats.includes(fileName.split('.').at(-1).toLowerCase()); // ['png','jpg','jpeg','svg']
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const random = new class {
    randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    choice = iter => iter[this.randint(0, iter.length - 1)];
    select = (... iter) => this.choice(iter);
}();
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const pageinCal = count => parseInt((count||0)/10)+(count<10 || count%10!=0?1:0);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const fileApi = file => `${url}/${file}`;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //