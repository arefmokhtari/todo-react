// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const RenderCM = (Component, kwargs, Cm = prop => <div {...prop}/>) => props => (
    <Cm {... kwargs}>
        <Component {... props} />
    </Cm>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default RenderCM;