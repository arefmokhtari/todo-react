// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../../components/GridProfile/GridProfile';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../../components/InputFieldAddress/InputFieldAddress';
import { getByIdAddress, updateAddresById } from '../../../../api/requests';
import { addAddressValidate } from '../../../../validates/addressValidate';
import AbsBtn from '../../../../components/GridProfile/AbsBtn/AbsBtn';
import { useRequest } from '../../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditAddress = () => {
    // - - - - - - - - - - - - - - //
    const { id } = useParams();
    const nav = useNavigate();
    const request = useRequest({
        start: {
            requestName: 'requestByLoadingAndToken',
            request: getByIdAddress,
            args: [id],
            success: req => formik.setValues({ city: req.data[0].city, description: req.data[0].description, province: req.data[0].province }),
        }
    });
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: updateAddresById,
        args: [id, values],
        success: (_) => nav('/profile/address'),
        showMessage: true,
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