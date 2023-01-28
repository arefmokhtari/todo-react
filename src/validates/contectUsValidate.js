// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const contectUsValidate = yup.object().shape({
    full_name: yup
        .string()
        .min(3, 'باید بیشتر از سه کاراکتر باشد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا نام را وارد کنید'),
    phone_number: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .test('len', 'باید شامل 11 رقم باشد', val => val?.toString().replace(/\s/g, '').length === 10)
        .required('لطفا شماره را وارد کنید'),
    message: yup
        .string()
        .min(3, 'باید بیشتر از سه کاراکتر باشد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا پیام را وارد کنید'),
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default contectUsValidate;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //