// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Button, Typography, Box } from '@mui/material';
import SunEditor from 'suneditor-react';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { GridShowItems, LabelText, BoxShowText, EditBox, BtnEdit, Image, BoxHideImage } from '../AboutUs.style';
import { useFormik } from 'formik';
import { url } from '../../../api/config';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditAbout = ({aboutUs, onSubmit}) => {
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            text: aboutUs.text,
            image: null,
        },
        onSubmit,
    });
    // - - - - - - - - - - - - //
    return (
        <GridShowItems container component='form' onSubmit={formik.handleSubmit}>
            <Grid item xs={12} md={6}>
                <BoxShowText>
                    <LabelText>متن</LabelText>
                    <SunEditor 
                        height='250px'
                        setContents={formik.values.text}
                        onChange={event => formik.setFieldValue('text', event)}
                    />
                </BoxShowText>
                <EditBox sx={{display: {xs: 'block', md: 'none'}}}>
                    <BtnEdit type='submit' variant='outlined' endIcon={<EditIcon />}>ویرایش</BtnEdit>
                </EditBox>
            </Grid>
            <Grid item xs={12} md={6} >
                <Box sx={{position: 'relative', overflow: 'hidden', marginTop: '25px',}}>
                    <BoxHideImage>
                        <Button component='label' sx={{color: 'white', zIndex: 10, fontSize: '180%'}} endIcon={<AddIcon />}>
                            افزودن عکس
                            <Typography component='input'
                                type='file'
                                hidden
                                onChange={event => formik.setFieldValue('image', event.currentTarget.files[0])}
                            />
                        </Button>
                    </BoxHideImage>
                    <Image
                        src={`${url}/${aboutUs.image}`}
                    />

                </Box>
                <EditBox sx={{display: {md: 'block', xs: 'none'}}}>
                    <BtnEdit type='submit' variant='outlined' endIcon={<EditIcon />}>ویرایش</BtnEdit>
                </EditBox>
            </Grid>
        </GridShowItems>
    );
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditAbout;