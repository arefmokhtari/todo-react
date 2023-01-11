// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { otpValidate } from '../../../validates/ForgetPassValidate';
import ConfirmPassFP from '../ConfirmPassFP/ConfirmPassFP';
import { checkOtp as checkReq } from '../../../api/requests';
import { tokenName } from '../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const OtpFP = ({ request, email, change }) => {
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoading({
        request: checkReq,
        args: [email, values.password],
        success: req => {
            localStorage.setItem(tokenName, req.data.data.token);
            change({
                CM: ConfirmPassFP,
                config: {},
            });
        },
        errorArg: {400: 'کد اشتباه است'},
    });
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