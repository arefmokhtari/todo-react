// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const discountCodeValidate = yup.object().shape({
    code: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .required('لطفا کد را وارد کنید'),
    discount_percent: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .positive()
        .min(1, 'باید بزرگتر از یک باشد')
        .max(100, 'باید کمتر از صد باشد')
        .required('لطفا درصد تخفیف را وارد کنید'),
    max_amount: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .positive()
        .min(1, 'باید بزرگتر از یک باشد'),
});

export const contectUsValidate = yup.object().shape({
    address: yup
        .string()
        .max(1000, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا آدرس را وارد کنید'),
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد')
        .max(1000, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا ایمیل را وارد کنید'),
    instagram: yup
        .string()
        .max(1000, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا اینستاگرام را وارد کنید'),
    phone_number: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .test('len', 'باید شامل 11 رقم باشد', val => val?.toString().replace(/\s/g, '').length === 10)
        .required('لطفا شماره را وارد کنید'),
});