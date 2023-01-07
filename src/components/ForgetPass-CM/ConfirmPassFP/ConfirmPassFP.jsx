// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { confirmValidate } from '../../../validates/ForgetPassValidate';
import { confirmPass as cReq } from '../../../api/requests';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ConfirmPassFP = ({ request }) => {
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: cReq,
        args: [values.password],
        showMessage: true,
        success: (_) => request.nav('/'),
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