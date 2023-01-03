// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


export const addAddressValidate = yup.object().shape({
    description: yup.string().min(8, 'آدرس حدالق باید هشت کاراکتر باشد').max(1000, 'تعداد حروف وارد شده زیاد است') .required('لطفا آدرس را وارد کنید'), 
    province: yup.string().required('لطفا استان را وارد کنید'), 
    city: yup.string().required('لطفا شهر را وارد کنید'),
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //