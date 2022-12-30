// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import PasswdIcon from '../../UI/ICONS/PasswdIcon/PasswdIcon';
import InputFromLogin from '../../InputFromLogin/InputFromLogin';
import { LogBtn } from '../../InputEmPas/InputEmPas.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const OtpFP = ({ email, change }) => {

    return ( <>
        <p>پسورد به ایمیل شما ارسال شد، آن را وارد کنید</p>
        <form action="">
            <InputFromLogin 
                label='پسورد'
                Icon={<PasswdIcon />}
                type='password'
            />
            <LogBtn type='submit' className='styleButtonHand' variant='contained'>فرستادن رمز</LogBtn>
        </form>
    </> );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default OtpFP;