// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import EmailIcon from '../UI/ICONS/EmailIcon/EmailIcon';
import PasswdIcon from '../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../InputFromLogin/InputFromLogin';
import { LogBtn } from './InputEmPas.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const InputEmPas = ({ formik }) => ( <>
    <InputFromLogin 
        type='email' 
        {... formik.getFieldProps('email')} 
        label='ایمیل' 
        Icon={<EmailIcon />} 
        helperText={formik.touched.email && formik.errors.email}
        error={formik.touched.email && (formik.errors.email != null)} 
    />
    <InputFromLogin 
        // style={{marginBottom: '30px'}} 
        type='password' {... formik.getFieldProps('password')} 
        label='رمز عبور' 
        Icon={<PasswdIcon />} 
        helperText={formik.touched.password && formik.errors.password}
        error={formik.touched.password && (formik.errors.password != null)} 
    />
    <LogBtn type='submit' className='styleButtonHand' variant='contained'>ورود</LogBtn>
</> );

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputEmPas;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //