// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../components/GridProfile/GridProfile';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../components/InputFieldAddress/InputFieldAddress';
import { addAddressValidate } from '../../../validates/addressValidate';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import { storeAddress as addAddressReq, setToken } from '../../../api/requests';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddAddress = () => {
    // - - - - - - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - - - - - - //
    useEffect(() => {
        if(!localStorage.getItem('token')) nav('/signup');
    },[]);
    // - - - - - - - - - - - - - - //
    const onSubmit = async (values, { resetForm }) => await loading(async () => {
        setToken(localStorage.getItem('token'));
        const req = await addAddressReq(values);

        if(req.ok){
            toast.success('انجام شد');
            resetForm();
        }else toast.error('مشکلی پیش آمده است');
    });
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            description: '', 
            province: '', 
            city: '',
        },
        onSubmit,
        validationSchema: addAddressValidate,
    });
    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='افزودن آدرس'>
            <Button to='/profile/address' component={Link} variant='contained' sx={{
                position: 'absolute',
                top: '10px',
                right: '30px',
                backgroundColor: '#71D0A0 !important',
                boxShadow: '0 0 0 0 !important',
            }}>بازگشت</Button>
            
            <InputFieldAddress formik={formik} text='افزودن آدرس'/>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //