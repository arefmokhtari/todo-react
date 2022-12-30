// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import { loginValidate } from '../../validates/SignLoginValidate';
import InputEmPas from '../../components/InputEmPas/InputEmPas';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoadingByFunc } from '../../hooks/loading-hook';
import { SpanSignUp } from './Login.style';
import { login as loginRequest } from '../../api/requests';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Login = () => {
    const loading = useLoadingByFunc();
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        const req = {ok: true} //await loginRequest(values);
        
        if(req.ok){
            // localStorage.setItem('token', req.data.token);
            toast.success('لاگین با موفقیت انجام شد');
        }else toast.error('انجام نشد، در وارد کردن اطلاعات دقت کنید');
    });

    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
        validationSchema: loginValidate,
    })
    // - - - - - - - - - - - - - - //
    return ( 
        <GridSignLogin>
            <h1>ورود و ثبت نام !</h1>
            <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های اندروید و آی او اس آغاز </p>
            <form onSubmit={formik.handleSubmit}>
                <InputEmPas formik={formik} />
            </form>
            <SpanSignUp>
                <span style={{display: 'block'}}>
                آیا ثبت نام کرده اید؟
                 <Link style={{color: '#71D0A0',textDecoration: 'none', paddingRight: '4px'}} to='/signup'>
                    ثبت نام
                </Link>
                </span>
                <Link style={{color: '#71D0A0',textDecoration: 'none', paddingRight: '4px'}} to='/forget-passwd'>
                    رمز خود را فراموش کرده ام
                </Link>
            </SpanSignUp>
        </GridSignLogin>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Login;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //