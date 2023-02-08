// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const userValidate = yup.object().shape({
    name: yup
        .string()
        .min(3, 'باید بیشتر از سه حرف باشد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا نام را وارد کنید'),
    phone_number: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .test('len', 'باید شامل 11 رقم باشد', val => !val || val?.toString().replace(/\s/g, '').length === 10)
        .notRequired(),
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا ایمیل را وارد کنید'),
});