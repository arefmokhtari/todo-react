
import React, {  } from 'react';


const RenderCM = (Component, kwargs) => props => (
    <div {... kwargs}>
        <Component {... props} />
    </div>
);

export default RenderCM;
