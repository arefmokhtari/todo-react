// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { otpValidate } from '../../../validates/ForgetPassValidate';
import ConfirmPassFP from '../ConfirmPassFP/ConfirmPassFP';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import { checkOtp as checkReq } from '../../../api/requests';
import { handlerError } from '../../../utils/plugins';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const OtpFP = ({ email, change }) => {
    // - - - - - - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        const req = await checkReq(email, values.password);
        if(req.ok){
            localStorage.setItem('token', req.data.data.token);
            change({
                CM: ConfirmPassFP,
                config: {},
            });
        }else handlerError(req.status, nav, toast, {400: 'کد اشتباه است'});
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