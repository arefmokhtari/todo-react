
import { Form, FieldAddress, BtnAdd } from './InputFieldAddress.style';
import SelectOp from '../UI/SelectOp/SelectOp';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';

const InputFieldAddress = ({formik}) => (
    <Grid container spacing={1} component={Form} onSubmit={formik.handleSubmit}>
        <Grid item md={5} sm={10} xs={11} sx={{margin: '10px auto'}}>
            <SelectOp
                id={'province'}
                label='استان'
                name='province'
                value={formik.values.province}
                onChange={formik.handleChange}
            >
                <MenuItem>انتخاب کنید</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectOp>
        </Grid>
        <Grid item md={5} sm={10} xs={11} sx={{margin: 'auto'}}>
            <SelectOp
                id={'city'}
                label='شهر'
                name='city'
                value={formik.values.city}
                onChange={formik.handleChange}
            >
                <MenuItem>انتخاب کنید</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectOp>
        </Grid>
        <Grid item md={11} sm={10} xs={11} sx={{margin: 'auto'}}>
            <FieldAddress 
                label='آدرس'
                maxRows={5}
                minRows={5}
                multiline
                { ... formik.getFieldProps('description') }
            />
            
        </Grid>
        <Grid item xs={11} sx={{margin: 'auto'}}>
            <BtnAdd type='submit' variant='contained'>افزودن آدرس</BtnAdd>
        </Grid>
    </Grid>
);

export default InputFieldAddress;