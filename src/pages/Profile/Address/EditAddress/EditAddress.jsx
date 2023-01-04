// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../../components/GridProfile/GridProfile';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../../components/InputFieldAddress/InputFieldAddress';
import { setToken, getByIdAddress, updateAddresById } from '../../../../api/requests';
import { useEffect } from 'react';
import { useLoadingByFunc } from '../../../../hooks/loading-hook';
import { toast } from 'react-toastify';
import { addAddressValidate } from '../../../../validates/addressValidate';
import AbsBtn from '../../../../components/GridProfile/AbsBtn/AbsBtn';
import { handlerError } from '../../../../utils/plugins';
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
        }else handlerError(req.status, nav, toast);
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
                else if(!handlerError(req.status, nav, toast)){
                    nav('/profile/address');
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