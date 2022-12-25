// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Button } from '@mui/material';
import styled from 'styled-components'
import { useFormik } from 'formik';
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import Temp4SignLogin from '../../components/Temp4SignLogin/Temp4SignLogin';
import EmailIcon from '../../components/UI/ICONS/EmailIcon/EmailIcon';
import PasswdIcon from '../../components/UI/ICONS/PasswdIcon/PasswdIcon';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SpanSignUp = styled.span({
    position: 'absolute',
    bottom: '10px',
    textAlign: 'center',
    right: 0,
    fontSize: '14px',
    left: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
});

const Login = () => {
    // - - - - - - - - - - - - - - //
    const singUpHandler = (values) => {
        console.log(values);
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: singUpHandler,
    })
    // - - - - - - - - - - - - - - //
    return ( 
        <Temp4SignLogin>
            <h1>ورود و ثبت نام !</h1>
            <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های اندروید و آی او اس آغاز </p>
            <form onSubmit={formik.handleSubmit}>
                <InputFromLogin type='email' {... formik.getFieldProps('email')} label='ایمیل' Icon={<EmailIcon />} />
                <InputFromLogin type='password' {... formik.getFieldProps('password')} label='رمز عبور' Icon={<PasswdIcon />} />
                <Button type='submit' className='styleButtonHand' sx={{display: 'block !important', margin: 'auto'}} variant='contained'>ورود</Button>
            </form>
            <SpanSignUp>آیا ثبت نام کرده اید؟ ثبت نام</SpanSignUp>
        </Temp4SignLogin>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Login;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //