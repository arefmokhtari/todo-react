// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import UserIcon from '../../components/UI/ICONS/UserIcon/UserIcon';
import { useFormik } from 'formik';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import { signUpValidate } from '../../validates/SignLoginValidate';
import InputEmPas from '../../components/InputEmPas/InputEmPas';
import { useLoadingByFunc } from '../../hooks/loading-hook';
import { signUp as signUpRequest } from '../../api/requests';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SignUp = () => {
    const loading = useLoadingByFunc();
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        const req = {ok: true} // await signUpRequest(values);
        if(req.ok)
            toast.success('حساب ساخته شد');
        else toast.error('مشکلی پیش آمده است');
    });
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