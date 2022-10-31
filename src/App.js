

import React, { useRef, useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import './App.css';

const App = () => {
    const input = useRef();
    const [state, setState] = useState({textinput: ''});

    const onChangeInput = () => {
        const text = input.current.value;
        setState({textinput: text});
    }
    return <InputForm {... {getinput: input, textinput:state.textinput, onchange: onChangeInput}}/>;
}


export default App;