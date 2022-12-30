// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import EmailIcon from '../../UI/ICONS/EmailIcon/EmailIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import OtpFP from '../OtpFP/OtpFP';
import { emailValidate } from '../../../validates/ForgetPassValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EmailCM = ({ change }) => {
    // - - - - - - - - - - - - - - //
    const onSubmit = (values) => {
        change({
            CM: OtpFP,
            config: {
                email: values.email,
            },
        });
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: emailValidate,  
        onSubmit,
    });
    // - - - - - - - - - - - - - - //
    return ( <>
        <p>لطفا ایمیل خود را وارد کنید</p>
        <form action="" onSubmit={formik.handleSubmit}>
            <InputFromLogin 
                label='ایمیل'
                type='email'
                Icon={<EmailIcon />}
                { ... formik.getFieldProps('email') }
                helperText={formik.touched.email && formik.errors.email}
                error={formik.touched.email && (formik.errors.email != null)}
            />
            <LogBtn type='submit' className='styleButtonHand' variant='contained'>فرستادن رمز</LogBtn>
        </form>
    </> );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EmailCM;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //