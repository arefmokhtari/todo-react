
import React from 'react';
import RenderCM from './RenderCM';


const DynCM = ({ children, Cm, ... kwargs}) => {
    if(Cm)
        return RenderCM(() => <>{children}</>, kwargs, Cm)();
    return RenderCM(() => <>{children}</>, kwargs)();
}

export default DynCM;