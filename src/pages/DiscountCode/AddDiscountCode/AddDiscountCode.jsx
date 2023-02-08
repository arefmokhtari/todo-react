// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Grid, } from '@mui/material';
import DateInput, { Input } from '../../../components/UI/DateInput/DateInput';
import { Label } from '../../AboutUs/AboutUs.style';
import { InputField } from './AddDiscountCode.style';
import { useFormik } from 'formik';
import { InBtn, BackBtn } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';
import { faNum2enNum } from '../../../utils/plugins';
import { useRequest } from '../../../hooks/request-hook';
import { discountCodeValidate } from '../../../validates/discountCodeValidate';
import { addDiscountCode } from '../../../api/requests';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddDiscountCode = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async values => {
        if(!values.expires_at) toast.error('لطفا تاریخ انقضا را وارد کنید'); 
        else await request.requestByLoadingAndToken({
            request: addDiscountCode,
            args: [values],
            showMessage: true,
            success: _ => request.nav('/discount-code'),
            errorArg: { 422: 'کد موجود میباشد'},
        });
    };
    // - - - - - - - - - - - - //
    const request = useRequest({});
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            expires_at: '',
            code: '',
            discount_percent: '',
            max_amount: '',
        },
        validationSchema: discountCodeValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' position='relative' margin='auto'>
            <BackBtn onClick={() => request.nav('/discount-code')} sx={{top: '10px'}}>بازگشت</BackBtn>
            <Grid item xs={12}><Label>افزودن کد تخفیف</Label></Grid>
            <Grid container maxWidth='lg' margin='auto' spacing={1}>
                <Grid item xs={12} sx={{borderRadius: '4px',boxShadow: '0 0 6px 0 rgba(0,0,0,.2)'}} component='form' onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ padding: '0 10px' }}>
                                <InputField 
                                    label='کد تخفیف'
                                    { ... formik.getFieldProps('code') }
                                    error={formik.touched.code && formik.errors.code != null} 
                                    helperText={formik.touched.code && formik.errors.code}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ padding: '0 10px' }}>
                                <InputField 
                                    label='درصد تخفیف'
                                    { ... formik.getFieldProps('discount_percent') }
                                    InputProps={{ inputProps: { min: 1, max: 100 } }}
                                    error={formik.touched.discount_percent && formik.errors.discount_percent != null} 
                                    helperText={formik.touched.discount_percent && formik.errors.discount_percent}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <DateInput 
                                render={<Input />}
                                value={formik.values.expires_at}
                                onChange={event => event && formik.setFieldValue('expires_at', faNum2enNum(event.format()))}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ padding: '0 10px' }}>
                                <InputField 
                                    label='حداکثر تخفیف'
                                    { ... formik.getFieldProps('max_amount') }
                                    error={formik.touched.max_amount && formik.errors.max_amount != null} 
                                    helperText={formik.touched.max_amount && formik.errors.max_amount}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <InBtn type='submit' variant='contained'>افزودن</InBtn>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddDiscountCode;