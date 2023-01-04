// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../../components/GridProfile/GridProfile';
import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../../components/InputFieldAddress/InputFieldAddress';
import { setToken, getByIdAddress, updateAddresById } from '../../../../api/requests';
import { useEffect } from 'react';
import { useLoadingByFunc } from '../../../../hooks/loading-hook';
import { toast } from 'react-toastify';
import { addAddressValidate } from '../../../../validates/addressValidate';
import AbsBtn from '../../../../components/GridProfile/AbsBtn/AbsBtn';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditAddress = () => {
    // - - - - - - - - - - - - - - //
    const { id } = useParams();
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await loading(async () => {
        const req = await updateAddresById(id, values);
        if(req.ok){
            toast.success('انجام شد');
            nav('/profile/address');
        }else toast.error('مشکلی پیش آمده است');
    });
    // - - - - - - - - - - - - - - //
    useEffect(() => {
        if(!localStorage.getItem('token')) nav('/signup');
        else
            (async () => await loading(async () => {
                setToken(localStorage.getItem('token'));
                const req = await getByIdAddress(id);
                if(req.ok)
                    formik.setValues({ city: req.data[0].city, description: req.data[0].description, province: req.data[0].province });
                else {
                    nav('/profile/address');
                    toast.error('مشکلی پیش آمده است');
                }
            }))();
        
    }, []);

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
        <GridProfile msg='ادیت آدرس'>
            <AbsBtn to='/profile/address'>بازگشت</AbsBtn>
            <InputFieldAddress formik={formik} text='ادیت آدرس'/>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //