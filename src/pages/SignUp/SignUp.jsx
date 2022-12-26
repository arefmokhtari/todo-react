// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import UserIcon from '../../components/UI/ICONS/UserIcon/UserIcon';
import { useFormik } from 'formik';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import { signUpValidate } from '../../validates/SignLoginValidate';
import InputEmPas from '../../components/InputEmPas/InputEmPas';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SignUp = () => {
    // - - - - - - - - - - - - - - //
    const onSubmit = (values) => {
        alert(values.toString());
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit,
        validationSchema: signUpValidate,
    });
    // - - - - - - - - - - - - - - //
    return (
        <GridSignLogin>
            <h1>ورود و ثبت نام !</h1>
            <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های اندروید و آی او اس آغاز </p>
            <form onSubmit={formik.handleSubmit}>
                <InputFromLogin 
                    {... formik.getFieldProps('name')} 
                    label='نام' 
                    Icon={<UserIcon sx={{backgroundColor: 'blue'}}/>} 
                    helperText={formik.touched.name && formik.errors.name} 
                    error={formik.touched.name && (formik.errors.name != null)} 
                />
                <InputEmPas formik={formik} />
            </form>
        </GridSignLogin>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default SignUp;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //