// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const emailValidate = yup.object().shape({
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد')
        .max(150, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا ایمیل را وارد کنید'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const otpValidate = yup.object().shape({
    password: yup
        .string()
        .min(5, 'باید بیشتر از پنج حرف باشد')
        .max(150, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا پسورد را وارد کنید'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //