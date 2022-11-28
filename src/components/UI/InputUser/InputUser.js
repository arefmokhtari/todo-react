
import React from 'react';
import InputError from './InputError/InputError';


const InputUser = ({errors, name, email, password, address, touched}) => {
    return <>
    <input style={errors.name?{boxShadow: '0 0 2px 0 blue'}:{}} type='text' {... name} placeholder='نام' />
    <input style={errors.email?{boxShadow: '0 0 2px 0 blue'}:{}} type='email' {... email} placeholder='ایمیل' /> <br/>
    <input style={errors.password?{boxShadow: '0 0 2px 0 blue'}:{}} type='password' {... password} placeholder='پسورد' /> <br/>
    <input style={errors.address?{boxShadow: '0 0 2px 0 blue'}:{}} type='text' {... address} placeholder='آدرس' />
    
    {['name', 'email', 'password', 'address'].map((value, i) =>
        <InputError key={i} name={value} errors={errors} touched={touched} />
    )}
    </>;
}


export default InputUser;