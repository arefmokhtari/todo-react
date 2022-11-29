// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';


const InputError = ({name, touched, errors}) => {
    return touched[name] && errors[name] && <p style={{color: 'red'}}>{errors[name]}</p>;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputError;
