// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { otpValidate } from '../../../validates/ForgetPassValidate';
import ConfirmPassFP from '../ConfirmPassFP/ConfirmPassFP';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const OtpFP = ({ email, change }) => {
    // - - - - - - - - - - - - - - //
    const onSubmit = (values) => {
        change({
            CM: ConfirmPassFP,
            config: {
                email: values.email,
                opt: values.password,
            },
        });
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: otpValidate,
        onSubmit,
    })
    // - - - - - - - - - - - - - - //
    return ( <>
        <p>پسورد به ایمیل شما ارسال شد، آن را وارد کنید</p>
        <form onSubmit={formik.handleSubmit}>
            <InputFromLogin 
                label='پسورد'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('password') }
                helperText={formik.touched.password && formik.errors.password}
                error={formik.touched.password && (formik.errors.password != null)}
            />
            <LogBtn type='submit' className='styleButtonHand' variant='contained'>تایید رمز</LogBtn>
        </form>
    </> );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default OtpFP;