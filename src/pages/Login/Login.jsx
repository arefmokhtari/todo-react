// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import styled from 'styled-components'
import { useFormik } from 'formik';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import { loginValidate } from '../../validates/SignLoginValidate';
import InputEmPas from '../../components/InputEmPas/InputEmPas';
import { Link } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SpanSignUp = styled.span`
    position: absolute;
    bottom: 8px;
    text-align: center;
    right: 0;
    font-size: 14px;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 900px){
        font-size: 12px;
    }
`;

const Login = () => {
    // - - - - - - - - - - - - - - //
    const onSubmit = (values) => {
        alert(values);
    }
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
            <SpanSignUp>آیا ثبت نام کرده اید؟
                 <Link style={{color: '#71D0A0',textDecoration: 'none', paddingRight: '4px'}} to='/signup'>
                    ثبت نام
                </Link>

            </SpanSignUp>
        </GridSignLogin>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Login;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //