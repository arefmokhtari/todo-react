// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import * as yup from 'yup';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const addWalletValidate = yup.object().shape({
    amount: yup
        .number()
        .typeError('باید فقط شامل ارقام باشد')
        .required('لطفا مبلغ را وارد کنید'),
});