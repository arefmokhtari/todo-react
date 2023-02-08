// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useParams } from 'react-router';
import { useRequest, requestName } from '../../../hooks/request-hook';
import EditBox from '../../../components/EditBox/EditBox';
import { getUserById, updateUserById } from '../../../api/requests';
import { Text, InBtn, BackBtn } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'; 
import { userValidate } from '../../../validates/userValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditUser = () => {
    // - - - - - - - - - - - - //
    const { id } = useParams();
    // - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getUserById,
            args: [id],
            success: req => formik.setValues({ name: req.data[0].name, phone_number: req.data[0].phone_number || '', email: req.data[0].email }),
            oneStart: true,
        }],
    });
    // - - - - - - - - - - - - //
    const onSubmit = async ({ phone_number, ...values }) => await request.requestByLoadingAndToken({
        request: updateUserById,
        args: [id, {...values, phone_number: phone_number.replace(/\s/g, '')}],
        success: (_) => request.nav('/users'),
        showMessage: true,
    });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            name: '',
            phone_number: '',
            email: '',
        },
        validationSchema: userValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    return ( <>
        <BackBtn component={Link} to='/users'>بازگشت</BackBtn>
        <EditBox title='ویرایش کاربر' onSubmit={formik.handleSubmit} component='form'>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                    <Text 
                        label='نام'
                        { ...formik.getFieldProps('name') }
                        error={formik.touched.name && formik.errors.name != null} 
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                    <Text 
                        label='ایمیل' 
                        { ...formik.getFieldProps('email') }
                        error={formik.touched.email && formik.errors.email != null} 
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}  display='flex' justifyContent='center'>
                    <Text 
                        label='شماره' 
                        type='phone'
                        { ...formik.getFieldProps('phone_number') }
                        error={formik.touched.phone_number && formik.errors.phone_number != null} 
                        helperText={formik.touched.phone_number && formik.errors.phone_number}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <InBtn type="submit" variant="contained">ویرایش</InBtn>
            </Grid>
        </EditBox>
    </> );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditUser;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //