// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import ChangePass from '../../components/ForgetPass-CM/ChangePass/ChangePass';
import { useRequest } from '../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ChangePasswd = () => {
    // - - - - - - - - - - //
    const request = useRequest({});
    // - - - - - - - - - - //
    return (
        <GridSignLogin>
            <h1>تغییر رمز عبور</h1>
            <ChangePass request={request}/>
        </GridSignLogin>
    );
    // - - - - - - - - - - //
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ChangePasswd;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //