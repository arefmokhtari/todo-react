// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import EmailIcon from '../UI/ICONS/EmailIcon/EmailIcon';
import PasswdIcon from '../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../InputFromLogin/InputFromLogin';
import { Button, styled } from '@mui/material';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const LogBtn = styled(Button)(({ theme }) => ({
    display: 'block !important',
    margin: 'auto',
    width: '91%',
    height: '60px',
    backgroundColor: '#71D0A0 !important',
    margin: 'auto',
    fontSize: '27px !important',
    paddingBottom: '6px',
    boxShadow: '0 0 0 0 !important',
    borderRadius: '16px !important',
    [theme.breakpoints.down('md')]: {
        height: '50px',
        fontSize: '22px !important',
    },
}));

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