// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { FormControlLabel, Grid, InputLabel, MenuItem, Select, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import { BackBtn, InBtn, Sele, Text } from '../EditAndAddCategory/EditAndAddCategory.style';
import EditBox from '../EditBox/EditBox';
import InputFile from '../UI/InputFile/InputFile';
import 'suneditor/dist/css/suneditor.min.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputProduct = ({formik, categories, subcategory, title, btnText}) => {
    // - - - - - - - - - - - - //
    const isImportantHandler = event => formik.setFieldValue('show_in_home_page', event.currentTarget.checked?'1':'0' );

    const fileChangeHandler = (event, name) => formik.setFieldValue(name, event.currentTarget.files[0]);
    // - - - - - - - - - - - - //
    return ( <>
        <BackBtn component={Link} to='/products'>بازگشت</BackBtn>
        <EditBox title={title} onSubmit={formik.handleSubmit} component='form'>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                    <Text
                        label='عنوان' 
                        error={formik.touched.title && formik.errors.title != null} 
                        helperText={formik.touched.title && formik.errors.title}
                        { ...formik.getFieldProps('title') }
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                    <Text
                        label='توضیعات' 
                        error={formik.touched.description && formik.errors.description != null} 
                        helperText={formik.touched.description && formik.errors.description}
                        { ...formik.getFieldProps('description') }
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                        <Text
                            label='قیمت' 
                            type='number'
                            InputProps={{ inputProps: { min: 0 } }}
                            error={formik.touched.price && formik.errors.price != null} 
                            helperText={formik.touched.price && formik.errors.price}
                            { ...formik.getFieldProps('price') }
                        />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                        <InputFile 
                            sx={{width: {xs: '90%',md: '250px',lg: '300px',xl: '350px'}, height: '55px', margin: '20px'}} onChange={event => fileChangeHandler(event, 'image_1')}
                            error={formik.touched.image_1 && formik.errors.image_1 != null} 
                            helperText={formik.touched.image_1 && formik.errors.image_1}
                        >
                            افزودن عکس(الزامی)
                        </InputFile>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center' alignItems='center'>
                        <InputFile 
                            sx={{width: {xs: '90%',md: '250px',lg: '300px',xl: '350px'}, height: '55px', margin: '20px'}} onChange={event => fileChangeHandler(event, 'image_2')}
                            error={formik.touched.image_2 && formik.errors.image_2 != null} 
                            helperText={formik.touched.image_2 && formik.errors.image_2}
                        >
                            افزودن عکس
                        </InputFile>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                        <InputFile 
                            sx={{width: {xs: '90%',md: '250px',lg: '300px',xl: '350px'}, height: '55px', margin: '20px'}} onChange={event => fileChangeHandler(event, 'image_3')}
                            error={formik.touched.image_3 && formik.errors.image_3 != null} 
                            helperText={formik.touched.image_3 && formik.errors.image_3}
                        >
                            افزودن عکس
                        </InputFile>
                    </Grid>
                </Grid>


                <Grid container sx={{marginTop: '20px'}}>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                        <Sele>
                            <InputLabel id='sdasd' sx={{backgroundColor: 'white', padding: '2px'}}>سردسته</InputLabel>
                            <Select 
                                name='category_id' 
                                onChange={formik.handleChange} 
                                value={formik.values.category_id}
                                required
                            >
                                <MenuItem>انتخاب کنید</MenuItem>
                                {categories.categories?.map(category => <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>)}
                            </Select>
                        </Sele>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                        <Sele>
                            <InputLabel id='sdasd' sx={{backgroundColor: 'white', padding: '2px'}}>زیردسته</InputLabel>
                            <Select 
                                name='subcategory_id' 
                                onChange={formik.handleChange} 
                                value={formik.values.subcategory_id}
                                required
                            >
                                <MenuItem value=''>انتخاب کنید</MenuItem>
                                {subcategory?.map(category => <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>)}
                            </Select>
                        </Sele>
                    </Grid>

                </Grid>
                <Grid container>
                    <Text
                        label='موجودی' 
                        type='number'
                        error={formik.touched.stock && formik.errors.stock != null} 
                        helperText={formik.touched.stock && formik.errors.stock}
                        InputProps={{ inputProps: { min: 0 } }}
                        { ...formik.getFieldProps('stock') }
                    /> 
                    <Text
                        label='درصد تخفیف' 
                        type='number'
                        InputProps={{ inputProps: { min: 0, max: 100 } }}
                        { ...formik.getFieldProps('discount_percent') }
                    /> 
                </Grid>
 
                <Grid item xs={12}>
                    <SunEditor 
                        height='120px'
                        placeholder='ویژگی ها'
                        onChange={event => formik.setFieldValue('features', event)}
                        name='features'
                        setContents={formik.values.features}
                    />
                </Grid>
                <Grid container>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox checked={formik.values.show_in_home_page==1} />} label='نمایش در صفحه خانه' onChange={isImportantHandler} sx={{width: '90%', margin:'auto', display: 'block'}}/>
                </Grid>
                    <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                        <InBtn type="submit" variant="contained">{btnText}</InBtn>
                    </Grid>
                </Grid>
            </Grid>
        </EditBox>
    </> );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputProduct;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //