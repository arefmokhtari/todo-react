// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../../components/GridProfile/GridProfile';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../../components/InputFieldAddress/InputFieldAddress';
import { addAddressValidate } from '../../../../validates/addressValidate';
import { storeAddress as addAddressReq } from '../../../../api/requests';
import AbsBtn from '../../../../components/GridProfile/AbsBtn/AbsBtn';
import { useRequest } from '../../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddAddress = () => {
    // - - - - - - - - - - - - - - //
    const request = useRequest({});
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: addAddressReq,
        args: [values],
        success: _ => request.nav(-1),
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
        <GridProfile msg='افزودن آدرس'>
            <AbsBtn to={-1}>بازگشت</AbsBtn>
            <InputFieldAddress formik={formik} text='افزودن آدرس'/>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //