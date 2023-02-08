// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { FormControlLabel, Grid, Checkbox } from '@mui/material';
import { BackBtn, InBtn, Text } from '../EditAndAddCategory/EditAndAddCategory.style';
import EditBox from '../EditBox/EditBox';
import InputFile from '../UI/InputFile/InputFile';
import { Link } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import { Box } from '@mui/system';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const InputNews = ({ formik, }) =>{ 
    // - - - - - - - - - // 
    const fileChangeHandler = event => formik.setFieldValue('image', event.currentTarget.files[0]);

    const isImportantHandler = event => formik.setFieldValue('is_important', event.currentTarget.checked?'1':'0' );
    // - - - - - - - - - // 
    return ( <>
        <BackBtn component={Link} to='/news' variant="contained">بازگشت</BackBtn>
        <EditBox title='افزودن اخبار' onSubmit={formik.handleSubmit} component='form'>
            <Grid container>
            <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                    <Text
                        label='عنوان'
                        sx={{width: {xl: '500px', lg: '400px', md: '400px', sm: '90%', xs: '90%'}}}
                        { ... formik.getFieldProps('title') }
                        error={formik.touched.title && formik.errors.title != null} 
                        helperText={formik.touched.title && formik.errors.title}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                    <InputFile 
                        sx={{width: {xs: '90%',md: '400px',lg: '400px',xl: '500px'}, height: '55px', margin: '20px'}}
                        onChange={fileChangeHandler}
                        error={formik.touched.image && formik.errors.image != null} 
                        helperText={formik.touched.image && formik.errors.image}
                        >
                        افزودن عکس
                    </InputFile>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Box sx={{marginTop: '10px',width: {xl: '800px', lg: '750px', md: '700px', xs: '90%'}}}>
                        <SunEditor 
                            height='120px'
                            placeholder='متن'
                            width='100%'
                            onChange={event => formik.setFieldValue('text', event)}
                            name='text'
                            setContents={formik.values.text}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} display='flex' sx={{flexDirection: 'column'}}>
                    <FormControlLabel control={<Checkbox checked={formik.values.is_important==1} />} label='اخبار مهم' 
                    sx={{display: 'block', margin: 'auto', width: {xs: '90%', md: '500px',xl: '700px'}}} onChange={isImportantHandler} />
                    <InBtn type="submit" variant="contained">افزودن</InBtn>
                </Grid>
            </Grid>
        </EditBox>
    </> );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default InputNews;