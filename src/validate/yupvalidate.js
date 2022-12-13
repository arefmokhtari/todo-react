// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as yup from 'yup';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const productValidate = yup.object().shape({
    title: yup.string().min(3, 'min 3').required('enter this field'),
    discription: yup.string().min(3, 'min 3').required('enter this field'),
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //