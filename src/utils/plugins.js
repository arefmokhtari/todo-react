

export const en2fa = num => parseInt(num).toLocaleString('fa-IR').replace(/\٬/g, ',');

export const configErrors = {
    84: 'دیتا یافت نشد',
    404: 'یافت نشد'

}
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