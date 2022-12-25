// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import './SignUp.css';
import UserIcon from '../../components/UI/ICONS/UserIcon/UserIcon';
import EmailIcon from '../../components/UI/ICONS/EmailIcon/EmailIcon';
import PasswdIcon from '../../components/UI/ICONS/PasswdIcon/PasswdIcon';
import { useFormik } from 'formik';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const SignUp = () => {
    // - - - - - - - - - - - - - - //
    const singUpHandler = (values) => {
        console.log(values);
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: singUpHandler,
    })
    // - - - - - - - - - - - - - - //
    return (
        <Container maxWidth="lg" disableGutters={true}>
            <Grid container className='main-grid4signupcom'>
                <Grid item md={6} xs={12} className='grid4signupcom4img'>
                    <Grid item lg={11} md={12} className='grid4signupcom4img-img'>
                        {/* <img src="" alt="image" /> */}
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} className='grid4signupcominputmain'>
                    <Grid item lg={11} md={12} className='grid4signupcominputmaininput'>
                        <form className='centerinputhandinmaininput' onSubmit={formik.handleSubmit}>
                            <h1>ورود و ثبت نام !</h1>
                            <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های اندروید و آی او اس آغاز </p>
                            <InputFromLogin {... formik.getFieldProps('name')} label='نام' Icon={UserIcon} />
                            <InputFromLogin type='email' {... formik.getFieldProps('email')} label='ایمیل' Icon={EmailIcon} />
                            <InputFromLogin type='password' {... formik.getFieldProps('password')} label='رمز عبور' Icon={PasswdIcon} />
                            <Button type='submit' className='styleButtonHand' sx={{display: 'block !important', margin: 'auto'}} variant='contained'>ورود</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default SignUp;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //