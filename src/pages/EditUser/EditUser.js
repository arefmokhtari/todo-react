
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { getUserById as getUserByIdRequest, deleteUserById as deleteUserByIdRequest, updateUserById } from '../../api/requests';
import { validateWidoutPass as validate } from '../../utils/yupValidate';
import { Load } from '../../context/contexts';
import InputUser from '../../components/UI/InputUser/InputUser';
import { toast } from 'react-toastify';
import './EditUser.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const EditUser = () => {
    // - - - - - - - - - - - - - - - - //
    const [isNeedPassword, setINeedPassword] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const load = useContext(Load);
    // - - - - - - - - - - - - - - - - //
    useEffect(() => {
        (async () => {
            load(true);
            const req = await getUserByIdRequest(id);
            if(req.ok){
                formik.setValues({
                    name: req.data.name || '',
                    email: req.data.email || '',
                    password: req.data.password || '',
                    address: req.data.address || '',
                });
                formik.setSubmitting(true);
            }
            else
                toast.error('درخواست به سرویس امکان پذیر نبود!');
            load(false);
        })();
    }, []);
    // - - - - - - - - - - - - - - - - //
    const move2UserHandler = () => {
        navigate('/users');
    }
    const updateUserHandler = async ({... values}, { setErrors }) => {

        if(isNeedPassword && !values.password)
            setErrors({ password: 'لطفا پسورد را وارد کنید' });
        else{
            load(true);
            if(!values.password) delete values.password;
            if(!values.address)
                values.address = null;
            const req = await updateUserById(id, values);
            if(req.ok){
                toast.success('کاربر با موفقیت ادیت شد، به صفحه کاربران برمیگردیم');
                move2UserHandler();
            }
            else toast.error('درخواست به سرویس انجام نشد');
            load(false);
        }
        
    }

    const deleteUserHandler = async () => {
        load(true);
        const req = await deleteUserByIdRequest(id);
        if(req.ok){
            toast.success('کاربر با موفقیت حذف شد، به صفحه کاربران برمیگردیم');
            move2UserHandler();
        }
        else toast.error('درخواست به سرویس انجام نشد');
        load(false);
    }
    // - - - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            password: '',
        },
        onSubmit: updateUserHandler,
        validationSchema: validate, 
    });
    // - - - - - - - - - - - - - - - - //
    
    return <>
    <button className='back-btn' onClick={move2UserHandler}>{'برگشت'}</button>
    <form className='form-user' onSubmit={formik.handleSubmit}>
        <InputUser 
            formik={formik}
            isPass={isNeedPassword}
            AnyCM={ () => <button type='button' onClick={() => {
                setINeedPassword(!isNeedPassword);
                formik.setValues({  address:formik.values.address, name:formik.values.name, email:formik.values.email, password: '' });
            }}>{isNeedPassword?'حذف ادیت پسورد':'ادیت پسورد'}</button> }
        />
        <button type='submit'>اعمال تغیرات</button>
        <button type='button' onClick={deleteUserHandler} className='delete-user-btn'>حذف کاربر</button> <br/>
    </form>
    </>;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditUser;