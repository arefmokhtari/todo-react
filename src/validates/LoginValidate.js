// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const loginValidate = yup.object().shape({
    name: yup
        .string()
        .min(3, 'باید بیشتر از سه حرف باشد')
        .max(100, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا اسم را وارد کنید'),
    password: yup
        .string()
        .min(4, 'باید بیشتر از چهار حرف باشد')
        .max(150, 'تعداد حروف وارد شده زیاد است')
        .matches(/^[a-zA-Z0-9#-]+$/, 'باید شامل حروف انگلیسی یا ارقام ان باشد')
        .required('لطفا پسورد را وارد کنید'),
});

export const categoryTitlevalidate = yup.object().shape({
    title: yup
        .string()
        .max(20, 'تعداد حروف وارد شده زیاد است')
        .trim('لطفا دسته بندی را وارد کنید')
        .required('لطفا دسته بندی را وارد کنید')
})
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //