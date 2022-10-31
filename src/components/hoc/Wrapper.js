
import React from 'react';

const Wrapper = (Component, className) => {
    return (props) => <div className={className}>
        <Component {... props}/>
    </div>;
}


export default Wrapper;