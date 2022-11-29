// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import InputError from './InputError/InputError';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const InputUser = ({formik, isPass, AnyCM}) => {

    return <>
    <input
        style={formik.errors.name?{boxShadow: '0 0 2px 0 blue'}:{}}
        type='text' {... formik.getFieldProps('name')}
        placeholder='نام' 
    />
    <input 
        style={formik.errors.email?{boxShadow: '0 0 2px 0 blue'}:{}} 
        type='email' {... formik.getFieldProps('email')} 
        placeholder='ایمیل' 
    /> <br/>
    {isPass && <><input 
        style={formik.errors.password?{boxShadow: '0 0 2px 0 blue'}:{}} 
        type='password' 
        {... formik.getFieldProps('password')} 
        placeholder='پسورد' 
    /> <br/></>} 
    {AnyCM && <AnyCM />}
    <input 
        style={formik.errors.address?{boxShadow: '0 0 2px 0 blue'}:{}} 
        type='text' 
        {... formik.getFieldProps('address')} 
        placeholder='آدرس' 
    />
    
    {['name', 'email', 'password', 'address'].map((value, i) =>
        <InputError key={i} name={value} errors={formik.errors} touched={formik.touched} />
    )}
    </>;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default InputUser;