// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, InputLabel,  Select, MenuItem } from '@mui/material';
import EditBox from '../EditBox/EditBox';
import { Sele, Text, InBtn, BackBtn } from './EditAndAddCategory.style';
import { Link } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditAndAddCategory = ({ title, formik, parents, to, isEdit, btnText }) => ( <>
    <BackBtn component={Link} to={to} variant="contained">بازگشت</BackBtn>
    <EditBox title={title} onSubmit={formik.handleSubmit} component='form'>
        <Grid container>
                <Grid {... (isEdit?{xs:12}:{xs: 12, sm: 12, md: 6})}item display='flex' justifyContent='center'>
                    <Text 
                        label='دسته بندی' 
                        {... formik.getFieldProps('title')}
                        sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}
                        error={formik.touched.title && formik.errors.title != null} 
                        helperText={formik.touched.title && formik.errors.title} />
                </Grid>
                {!isEdit && <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                    <Sele sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}>
                        <InputLabel id='sdasd' sx={{backgroundColor: 'white', padding: '2px'}}>دسته</InputLabel>
                        <Select labelId='sdasd' name='parent_id' onChange={formik.handleChange} value={formik.values.parent_id}>
                            <MenuItem value=''>انتخاب کنید</MenuItem>
                            {parents.map(value => <MenuItem key={value.id} value={`${value.id}`}>{value.title}</MenuItem>)}
                        </Select>
                    </Sele>
                </Grid>}
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <InBtn type="submit" variant="contained">{btnText}</InBtn>
            </Grid>
    </EditBox>
    </> );
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditAndAddCategory;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //