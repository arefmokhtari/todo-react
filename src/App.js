
import React, { useRef, useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import './App.css';
import EmailForm from './components/EmailForm/EmailForm';

const App = () => {
    const input = useRef();
    const [state, setState] = useState({
        textinput: '',
        disablesubmit: true,
        data: {email: '', password: ''},
    });

    const onChangeInput = () => {
        const text = input.current.value;
        const data = {... state};
        data.textinput = text;
        setState(data);
    }
    const checkEmailPassword = (email, password) => {
        const emailText = email.current.value.trim();
        const passwordText = password.current.value.trim();
        if(emailText === state.data.email && passwordText === state.data.password)
            alert('Login was successful !');
        else alert('password or email is wrong !');
    };
    const saveEmailPassword = (email, password) => {
        const emailText = email.current.value.trim();
        const passwordText = password.current.value.trim();
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailText))
            if(passwordText.length !== 0){
                const data = {... state};
                data.data.email = emailText;
                data.data.password = passwordText;
                data.disablesubmit = false;
                setState(data);
                alert('saved !');
            }else alert('password not entered !');
        else alert('email is wrong');

    }
    return <>
        <InputForm {... {getinput: input, textinput:state.textinput, onchange: onChangeInput}}/>
        <EmailForm {... {disablesubmit: state.disablesubmit, save: saveEmailPassword, check: checkEmailPassword}}/>
    </>;
}

export default App;