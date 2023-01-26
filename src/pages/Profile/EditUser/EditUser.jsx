// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../components/GridProfile/GridProfile';
import AbsBtn from '../../../components/GridProfile/AbsBtn/AbsBtn';
import { useRequest } from '../../../hooks/request-hook';
import { getUserInfo, updateUser } from '../../../api/requests';
import { useFormik } from 'formik';
import { Grid } from '@mui/material';
import InputFromLogin from '../../../components/InputFromLogin/InputFromLogin';
import { BtnAdd } from '../../../components/InputFieldAddress/InputFieldAddress.style';
import { editVal } from '../../../validates/editUserVal';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditUser = () => {
    // - - - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: updateUser,
        args: [values],
        showMessage: true,
    })
    // - - - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: 'requestByLoadingAndToken',
            request: getUserInfo,
            success: req => formik.setValues({ email: req.data.email, name: req.data.name, phone_number: req.data.phone_number|| '' }),
        }],
    });
    // - - - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phone_number: '',
        },
        validationSchema: editVal,
        onSubmit,
    });
    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='ادیت یوزر'>
            <AbsBtn to='/profile/show'>بازگشت</AbsBtn>
            <Grid container spacing={1} component='form' onSubmit={formik.handleSubmit}>
                <Grid item md={5} sm={10} xs={11} sx={{margin: '10px auto'}}>
                    <InputFromLogin label='نام' {... formik.getFieldProps('name')} 
                        error={formik.touched.name && (formik.errors.name != null)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item md={5} sm={10} xs={11} sx={{margin: '10px auto'}}>
                    <InputFromLogin label='ایمیل' {... formik.getFieldProps('email')} type='email'
                        error={formik.touched.email && (formik.errors.email != null)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item md={11} sm={10} xs={11} sx={{margin: 'auto'}}>
                    <InputFromLogin style={{width: {md: '50%', xs: '90%', sm: '90%'}}} {... formik.getFieldProps('phone_number')} label='شماره' type='text'
                        error={formik.touched.phone_number && (formik.errors.phone_number != null)}
                        helperText={formik.touched.phone_number && formik.errors.phone_number}
                    />
                </Grid>
                <Grid item xs={11} sx={{margin: 'auto'}}>
                    <BtnAdd type='submit' variant='contained'>ادیت</BtnAdd>
                </Grid>
            </Grid>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditUser;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //