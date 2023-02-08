// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';
import { checkFormatFile } from '../utils/plugins';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const configure = {
    title: yup
    .string()
    .min(3, 'باید بیشتر از سه حرف باشد')
    .max(100, 'تعداد حروف وارد شده زیاد است')
    .required('لطفا عنوان را وارد کنید'),
    text:yup
        .string()
        .min(3, 'باید بیشتر از سه حرف باشد')
        .max(2000, 'تعداد حروف وارد شده زیاد است')
        .required('لطفا متن را وارد کنید'),
}

export const editValidate = yup.object().shape({
    ...configure,
    image: yup
        .mixed()
        .test('format','فرمت فایل نامعتبر است', value => !value?.name || checkFormatFile(['png','jpg','jpeg','svg'], value?.name))
});

export const newsAddValidate = yup.object().shape({
    ... configure,
    image: yup
        .mixed()
        .test('format','فرمت فایل نامعتبر است', value => value?.name && checkFormatFile(['png','jpg','jpeg','svg'], value?.name))
        .required('فایل را وارد کنید')
});