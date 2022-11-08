
import React from 'react';
import RenderCM from './RenderCM';


const DynCM = ({ children, ... kwargs }) => RenderCM(() => <>{children}</>, kwargs)();


export default DynCM;