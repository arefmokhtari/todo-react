// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { confirmValidate } from '../../../validates/ForgetPassValidate';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import { useNavigate } from 'react-router';
import { confirmPass as cReq, setToken } from '../../../api/requests';
import { handlerError } from '../../../utils/plugins';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ConfirmPassFP = ({ change }) => {
    // - - - - - - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        setToken(localStorage.getItem('token'));
        const req = await cReq(values.password);
        if(req.ok){
            toast.success('انجام شد');
            nav('/');
        }else handlerError(req.status, nav, toast);
    });
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpass: '',
        },
        onSubmit,
        validationSchema: confirmValidate,
    })
    // - - - - - - - - - - - - - - //
    return ( <>
        <p>پسورد جدید را وارد کرده و آن را تایید کنید</p>
        <form onSubmit={formik.handleSubmit}>
            <InputFromLogin 
                label='پسورد'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('password') }
                helperText={formik.touched.password && formik.errors.password}
                error={formik.touched.password && (formik.errors.password != null)}
            />
            <InputFromLogin 
                label='تکرار پسورد'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('confirmpass') }
                helperText={formik.touched.confirmpass && formik.errors.confirmpass}
                error={formik.touched.confirmpass && (formik.errors.confirmpass != null)}
            />
            <LogBtn type='submit' className='styleButtonHand' variant='contained'>تایید</LogBtn>
        </form>
    </> );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ConfirmPassFP;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //