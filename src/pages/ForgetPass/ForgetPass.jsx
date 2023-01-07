// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useState } from 'react';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import EmailCM from '../../components/ForgetPass-CM/EmailFP/EmailFP';
import { useRequest } from '../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ForgetPass = () => {
    // - - - - - - - - - - //
    const [showCM, setCM] = useState({
        CM: EmailCM,
        config: {},
    });
    const request = useRequest({ingnoreToken: true});
    // - - - - - - - - - - //
    return (
        <GridSignLogin>
            <h1>بازیابی رمز عبور</h1>
            {<showCM.CM change={setCM} request={request} {... showCM.config} />}
        </GridSignLogin>
    );
    // - - - - - - - - - - //
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ForgetPass;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //