// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as yup from 'yup';



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const login = {
    email: yup
        .string()
        .email('ایمیل مطابقت ندارد')
        .required('لطفا ایمیل را وارد کنید'),
    password: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .min(8, 'باید بیشتر از هشت حرف باشد')
        .matches(/[a-zA-Z]/, 'باید شامل حروف انگلیسی یا ارقام ان باشد')
        .required('لطفا پسورد را وارد کنید'),
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const loginValidate = yup.object().shape(login);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const signUpValidate = yup.object().shape({
    name: yup
        .string()
        .min(3, 'باید بیشتر از سه حرف باشد')
        .max(120, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا اسم را وارد کنید'),
    ... login,
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //