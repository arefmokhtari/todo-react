// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const editVal = yup.object().shape({
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد')
        .max(150, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا ایمیل را وارد کنید'),
    name: yup
        .string()
        .min(3, 'باید بیشتر از سه حرف باشد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا اسم را وارد کنید'),
    phone_number: yup
        .number()
        .typeError('باید شامل ارقام باشد')
        .notRequired()
        .max(100, 'تعداد ارقام وارد شده زیاد است'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //