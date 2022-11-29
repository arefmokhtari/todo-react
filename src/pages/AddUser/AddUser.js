// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import { validate } from '../../utils/yupValidate';
import { addUser as addUserRequest } from '../../api/requests';
import { toast } from 'react-toastify';
import { Load } from '../../context/contexts';
import InputUser from '../../components/UI/InputUser/InputUser';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const AddUser = () => {
    // - - - - - - - - - - - - - - - - //
    const load = useContext(Load);
    useEffect(() => {
        load(true);
        setTimeout(()=> load(false), 500);
    },[]);
    // - - - - - - - - - - - - - - - - //
    const sendUserHandler = async ({ address, ... kwargs }, { resetForm }) => {
        load(true);

        if(address) kwargs.address = address;
        
        const request = await addUserRequest(kwargs);
        if(request.errors){
            if(request.errors.email)
                toast.error('ایمیل یا موجود میباشد یا ایمیل دارای مشکل است');
            else
                toast.error('درخواست به سرویس امکان پذیر نبود!');
        }else {
            toast.success('!کاربر با موفقیت اضافه شد');
            resetForm();
        }
        load(false);
    }
    // - - - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
        },
        onSubmit: sendUserHandler,
        validationSchema: validate, 
    });
    // - - - - - - - - - - - - - - - - //
    return <form className='form-user' onSubmit={formik.handleSubmit}>
            <InputUser 
                formik={formik}
                isPass={true}
            />
            <button type='submit'>اضافه کردن کاربر</button> <br/>
    </form>;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default AddUser;

