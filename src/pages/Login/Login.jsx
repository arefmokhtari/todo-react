// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Container } from '@mui/material';
import { GridTop, Grid4Login, DivS, DivLogin, LogBtn } from './Login.style';
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import logo from '../../assets/logo.png';
import PasswdIcon from '../../components/UI/ICONS/PasswdIcon/PasswdIcon';
import { adminLogin as adminLoginRequest } from '../../api/requests';
import { useFormik } from 'formik';
import EmailIcon from '../../components/UI/ICONS/EmailIcon/EmailIcon';
import { loginValidate } from '../../validates/LoginValidate';
import { useRequest, tokenName } from '../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Login = () => {
    // - - - - - - - - - - - - //
    const requests = useRequest({ ingnoreToken: true });
    // - - - - - - - - - - - - //
    const onSubmit = async values => await requests.requestByLoading({
        request: adminLoginRequest,
        args: [values],
        errorArg: { 400:  'نیم یا پسورد اشتباه است'},
        showMessage: true,
        successText: 'لاگین انجام شد',
        success: req => {
            localStorage.setItem(tokenName, req.data.data);
            requests.nav('/');
        },
    });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit,
        validationSchema: loginValidate,
    });
    // - - - - - - - - - - - - //
    return (
        <Container maxWidth="lg"  direction='column' >
            <Grid container>
                <GridTop xs={12} sx={{display: 'flex'}} item  alignItems='center' >
                    <DivS />
                    <img src={logo} alt="" style={{height: '150px'}} />
                    <DivS />
                </GridTop>
                <Grid4Login xs={12} sx={{textAlign: 'center'}} item>
                    <DivLogin>
                        <h1 style={{color: '#525252', paddingTop: '10px'}}>صفحه ورود پنل</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <InputFromLogin 
                                { ... formik.getFieldProps('name') }
                                label='نام'
                                type='text'
                                Icon={<EmailIcon />} 
                                error={formik.touched.name && (formik.errors.name != null)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <InputFromLogin 
                                { ... formik.getFieldProps('password') }
                                type='password'
                                label='رمز عبور' 
                                Icon={<PasswdIcon />} 
                                error={formik.touched.password && (formik.errors.password != null)}
                                helperText={formik.touched.password && formik.errors.password}
                        />
                            <LogBtn type='submit' variant='contained'>ورود</LogBtn>
                        </form>
                    </DivLogin>
                </Grid4Login>
            </Grid>
        </Container>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Login;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //