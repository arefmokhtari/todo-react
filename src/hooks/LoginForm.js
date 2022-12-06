// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import { loginValidate } from '../validate/validate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const useFormikLogin = (config, submit) => useFormik({
    initialValues: config,
    onSubmit: submit,
    validationSchema: loginValidate,
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //