// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { FieldAddress, BtnAdd } from './InputFieldAddress.style';
import SelectOp from '../UI/SelectOp/SelectOp';
import { Grid, MenuItem } from '@mui/material';
import { province, city } from '../../utils/provinceAndCity';
import { useCallback } from 'react';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputFieldAddress = ({formik, text}) => {
    // - - - - - - - - - - //
    const changeProvinceHandler = useCallback(event => {
        const { description } = formik.values;
        formik.setValues({ province: event.target.value ,city: '', description });
    }, []);
    // - - - - - - - - - - //
    return (
        <Grid container spacing={1} component='form' onSubmit={formik.handleSubmit}>
        <Grid item md={5} sm={10} xs={11} sx={{margin: '10px auto'}}>
            <SelectOp
                id={'province'}
                label='استان'
                name='province'
                value={formik.values.province}
                onChange={changeProvinceHandler}
                onBlur={formik.handleBlur}
                required
            >
                <MenuItem>انتخاب کنید</MenuItem>
                {
                    province.map(ci => <MenuItem key={ci.provinceId} value={ci.provinceName}>{ci.provinceName}</MenuItem>)
                }
            </SelectOp>
        </Grid>
        <Grid item md={5} sm={10} xs={11} sx={{margin: 'auto'}}>
            <SelectOp
                id={'city'}
                label='شهر'
                name='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
            >
                <MenuItem>انتخاب کنید</MenuItem>
                {
                    city.filter(v => v.provinceName == formik.values.province).map(v => <MenuItem key={v.cityId} value={v.cityName}>{v.cityName}</MenuItem>)
                }
            </SelectOp>
        </Grid>
        <Grid item md={11} sm={10} xs={11} sx={{margin: 'auto'}}>
            <FieldAddress 
                label='آدرس'
                maxRows={5}
                minRows={5}
                multiline
                error={formik.touched.description && (formik.errors.description != null)}
                helperText={formik.touched.description && formik.errors.description}
                { ... formik.getFieldProps('description') }
            />
            
        </Grid>
        <Grid item xs={11} sx={{margin: 'auto'}}>
            <BtnAdd type='submit' variant='contained'>{text}</BtnAdd>
        </Grid>
    </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputFieldAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //