// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../components/GridProfile/GridProfile';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFieldAddress from '../../../components/InputFieldAddress/InputFieldAddress';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddAddress = () => {
    // - - - - - - - - - - - - - - //
    const onSubmit = values => {
        console.log(values);
    }
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            description: '', 
            province: '', 
            city: '',
        },
        onSubmit,
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
            
            <InputFieldAddress formik={formik}/>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //