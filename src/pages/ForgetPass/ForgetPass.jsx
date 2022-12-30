// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useState } from 'react';
import GridSignLogin from '../../components/GridSignLogin/GridSignLogin';
import EmailCM from '../../components/ForgetPass-CM/EmailFP/EmailFP';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ForgetPass = () => {
    const [showCM, setCM] = useState({
        CM: EmailCM,
        config: {}
    });
    
    return (
        <GridSignLogin>
            <h1>بازیابی رمز عبور</h1>
            {<showCM.CM change={setCM} {... showCM.config} />}
        </GridSignLogin>
    );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ForgetPass;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //