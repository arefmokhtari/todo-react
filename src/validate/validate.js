// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as yup from 'yup';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const loginValidate = yup.object().shape({
    username: yup.string().min(3, 'باید بیشتر از سه کاراکتر باشد!').required('یوزنیم را وارد کنید'),
    email: yup.string().email('ایمیل مطابقت ندارد').required('ایمیل را وارد کنید'),
    password: yup.string().min(4, 'باید بیشتر از چهار کاراکتر باشد').required('پسورد را وارد کنید'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //