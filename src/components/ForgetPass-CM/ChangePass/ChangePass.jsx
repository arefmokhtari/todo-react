// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
import { useFormik } from 'formik';
import { changePasswd } from '../../../validates/ForgetPassValidate';
import { changePasswd as cReq } from '../../../api/requests';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ChangePass = ({ request }) => {
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: cReq,
        args: [values],
        showMessage: true,
        success: (_) => request.nav('/profile/show'),
    });
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            password: '',
            current_password: '',
            new_password: '',
        },
        onSubmit,
        validationSchema: changePasswd,
    })
    // - - - - - - - - - - - - - - //
    return ( <>
        <p>پسورد فعلی و پسورد جدید را وارد کنید</p>
        <form onSubmit={formik.handleSubmit}>
            <InputFromLogin 
                label='پسورد فعلی'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('current_password') }
                helperText={formik.touched.current_password && formik.errors.current_password}
                error={formik.touched.current_password && (formik.errors.current_password != null)}
            />
            <InputFromLogin 
                label='تکرار پسورد فعلی'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('password') }
                helperText={formik.touched.password && formik.errors.password}
                error={formik.touched.password && (formik.errors.password != null)}
            />
            <InputFromLogin 
                label='پسورد جدید'
                Icon={<PasswdIcon />}
                type='password'
                { ... formik.getFieldProps('new_password') }
                helperText={formik.touched.new_password && formik.errors.new_password}
                error={formik.touched.new_password && (formik.errors.new_password != null)}
            />
            <LogBtn type='submit' className='styleButtonHand' variant='contained'>تایید</LogBtn>
        </form>
    </> );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ChangePass;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //