// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import { loginValidate } from '../../validates/SignLoginValidate';
import InputEmPas from '../../components/InputEmPas/InputEmPas';
import { Link } from 'react-router-dom';
import { SpanSignUp } from './Login.style';
import { login as loginRequest } from '../../api/requests';
import { useRequest } from '../../hooks/request-hook';
import { tokenName } from '../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Login = () => {
    // - - - - - - - - - - - - - - //
    const request = useRequest({ingnoreToken: true});
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoading({
        request: loginRequest,
        args: [values],
        success: req => {localStorage.setItem(tokenName, req.data.data.token);request.nav('/')},
        successText: 'لاگین با موفقیت انجام شد',
        errorArg: { 400:  'پسورد یا ایمیل اشتباه است'},
        showMessage: true,
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