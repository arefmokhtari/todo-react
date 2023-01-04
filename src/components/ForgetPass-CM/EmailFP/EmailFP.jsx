// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import EmailIcon from '../../UI/ICONS/EmailIcon/EmailIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import OtpFP from '../OtpFP/OtpFP';
import { emailValidate } from '../../../validates/ForgetPassValidate';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import { sendCode as sendCodeReq } from '../../../api/requests';
import { handlerError } from '../../../utils/plugins';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EmailCM = ({ change }) => {
    // - - - - - - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();

    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        const req = await sendCodeReq(values.email);
        if(req.ok){
            change({
                CM: OtpFP,
                config: {
                    email: values.email,
                },
            });
        }else handlerError(req.status, nav, toast, { 400: 'ایمیل ثبت نشده است' });

    });
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
        <form onSubmit={formik.handleSubmit}>
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