
import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const validate = yup.object().shape({
    name: yup.string()
        .min(3, 'کاراکتر های وارد شده در اسم کمتر از حد نصاب میباشد')
        .max(100, 'کاراکترهای وارد شده در اسم بیشتر از حد نصاب است').required('لطفا نام را وارد کنید'),
    email: yup.string()
        .email('ایمیل وارد شده صحیح نمیباشد')
        .max(250, 'کاراکترهای وارد شده در ایمیل بیشتر از حد نصاب است')
        .required('لطفا ایمیل را وارد کنید'),
    password: yup.string()
        .min(6, 'کاراکتر های وارد شده در پسورد کمتر از حد نصاب میباشد')
        .max(100, 'کاراکترهای وارد شده در پسورد بیشتر از حد نصاب است').required('لطفا پسورد را وارد کنید'),
    address: yup.string()
        .max(2500, 'کاراکترهای وارد شده بیشتر از حد نصاب است'),
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const validateWidoutPass = yup.object().shape({
    name: yup.string()
        .min(3, 'کاراکتر های وارد شده در اسم کمتر از حد نصاب میباشد')
        .max(100, 'کاراکترهای وارد شده در اسم بیشتر از حد نصاب است').required('لطفا نام را وارد کنید'),
    email: yup.string()
        .email('ایمیل وارد شده صحیح نمیباشد')
        .max(250, 'کاراکترهای وارد شده در ایمیل بیشتر از حد نصاب است')
        .required('لطفا ایمیل را وارد کنید'),
    address: yup.string()
        .max(2500, 'کاراکترهای وارد شده بیشتر از حد نصاب است'),
});