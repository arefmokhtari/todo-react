// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';
import { checkFormatFile } from '../utils/plugins';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const configure = {
    title: yup
    .string()
    .min(3, 'حداقل باید سه کاراکتر باشد')
    .max(100, 'حروف بیش از حد نصاب است')
    .required('لطفا عنوان را وارد کنید'),
    description: yup
        .string()
        .min(3, 'حداقل باید سه کاراکتر باشد')
        .max(1000, 'حروف بیش از حد نصاب است')
        .required('لطفا توضیعات را وارد کنید'),
    image_2: yup
        .mixed()
        .test('format2','فرمت فایل نامعتبر است', value => !value?.name || checkFormatFile(['png','jpg','jpeg','svg'], value?.name)),
    image_3: yup
        .mixed()
        .test('format3','فرمت فایل نامعتبر است', value => !(value?.name) || checkFormatFile(['png','jpg','jpeg','svg'], value?.name)),
    price: yup
        .number()
        .required('لطفا مبلغ را وارد کنید'),
    stock: yup
        .number()
        .required('لطفا مبلغ را وارد کنید'),
}

export const addProductValidate = yup.object().shape({
    ... configure,
    image_1: yup
        .mixed()
        .test('format1','فرمت فایل نامعتبر است', value => value?.name && checkFormatFile(['png','jpg','jpeg','svg'], value?.name))
        .required('فایل را وارد کنید'),
});

export const editProductValidate = yup.object().shape({
    ... configure,
    image_1: yup
        .mixed()
        .test('format3','فرمت فایل نامعتبر است', value => !(value?.name) || checkFormatFile(['png','jpg','jpeg','svg'], value?.name)),
});