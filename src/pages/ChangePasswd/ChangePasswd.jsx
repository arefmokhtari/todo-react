// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useState } from 'react';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import ConfirmPassFP from '../../components/ForgetPass-CM/ConfirmPassFP/ConfirmPassFP';
import ChangePass from '../../components/ForgetPass-CM/ChangePass/ChangePass';
import { useRequest } from '../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ChangePasswd = () => {
    // - - - - - - - - - - //
    const [showCM, setCM] = useState({
        CM: ChangePass,
        config: {},
    });
    const request = useRequest({});
    // - - - - - - - - - - //
    return (
        <GridSignLogin>
            <h1>بازیابی رمز عبور</h1>
            <showCM.CM change={setCM} request={request} {... showCM.config} />
        </GridSignLogin>
    );
    // - - - - - - - - - - //
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ChangePasswd;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //