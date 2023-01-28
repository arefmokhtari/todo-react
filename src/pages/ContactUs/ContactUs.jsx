// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Grid } from '@mui/material';
import MainGrid from '../../components/MainGrid/MainGrid';
import { ShowLabel, BoxIcon, BtnSend, Text, GridInput, ItemBox, ItemIconBox, LabelHead, LabelBody } from './ContactUs.style';
import SmsIcon from '../../components/UI/ICONS/ContectUsIcons/SmsIcon/SmsIcon';
import InstagramIcon from '../../components/UI/ICONS/ContectUsIcons/InstagramIcon/InstagramIcon';
import EmailIcon from '../../components/UI/ICONS/ContectUsIcons/EmailIcon/EmailIcon';
import CallIcon from '../../components/UI/ICONS/ContectUsIcons/CallIcon/CallIcon';
import LocationIcon from '../../components/UI/ICONS/ContectUsIcons/LocationIcon/LocationIcon';
import { useState } from 'react';
import { useRequest, requestName } from '../../hooks/request-hook';
import { contactUsContent as contactUsContentRequest, storeContactUs } from '../../api/requests';
import { useFormik } from 'formik';
import contectUsValidate from '../../validates/contectUsValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ContactUs = () => {
    // - - - - - - - - - - //
    const onSubmit = async (values, { resetForm }) => await request.requestByLoading({
        request: storeContactUs,
        args: [values],
        showMessage: true,
        success: _ => resetForm(),
    })
    // - - - - - - - - - - //
    const [contactUsContent, setContactUsContent] = useState({});
    // - - - - - - - - - - //
    const request = useRequest({
        ingnoreToken: true,
        start: [{
            requestName: requestName.BYLOADING,
            request: contactUsContentRequest,
            success: req => setContactUsContent(req.data),
        },],
    });
    // - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            full_name: '',
            phone_number: '',
            message: '',
            email: '',
        },
        validationSchema: contectUsValidate,
        onSubmit,
    });
    // - - - - - - - - - - //
    return (
        <MainGrid marginTop='100px'>
                <GridInput item xs={12} md={8} lg={9} sx={{position: 'relative'}} component='form' onSubmit={formik.handleSubmit}>
                    <BoxIcon><SmsIcon /></BoxIcon>
                    <Grid item xs={12}>
                        <ShowLabel>ارتباط با ما</ShowLabel>
                    </Grid>
                    <Grid item xs={10} sx={{margin: 'auto', marginTop: '32px'}}>
                        <Grid container spacing={4}>
                                <Grid item xs={12} md={6} >
                                    <Text 
                                        sx={{width: '100%'}}
                                        label='نام و نام خوانوادگی'
                                        { ... formik.getFieldProps('full_name') }
                                        error={formik.touched.full_name && (formik.errors.full_name != null)}
                                        helperText={formik.touched.full_name && formik.errors.full_name}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Text
                                        sx={{width: '100%'}}
                                        label='شماره تماس'
                                        { ... formik.getFieldProps('phone_number') }
                                        error={formik.touched.phone_number && (formik.errors.phone_number != null)}
                                        helperText={formik.touched.phone_number && formik.errors.phone_number}
                                    />
                                </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{marginTop: '24px'}}>
                            <Text
                                sx={{width: '100%'}}
                                label='ایمیل'
                                { ... formik.getFieldProps('email') }
                                error={formik.touched.email && (formik.errors.email != null)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{marginTop: '24px'}}>
                            <Text
                                sx={{width: '100%'}}
                                label='پیام'
                                maxRows={5}
                                minRows={5}
                                multiline
                                { ... formik.getFieldProps('message') }
                                error={formik.touched.message && (formik.errors.message != null)}
                                helperText={formik.touched.message && formik.errors.message}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sx={{margin: '24px auto'}}>
                            <BtnSend variant='contained' type='submit'>
                                ارسال پیام
                            </BtnSend>
                        </Grid>
                </GridInput>
                
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    lg={3}
                    sx={{paddingTop: '0 !important', paddingLeft: {xs: '0 !important',md: '16px !important', lg: '32px !important'}}} 
                    display='flex' 
                    justifyContent='space-between'
                    flexDirection='column'
                >

                <ItemBox>
                    <ItemIconBox>
                        <InstagramIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                        <LabelHead>اینستاگرام</LabelHead>
                        <LabelBody sx={{direction: 'rtl',  textAlign: 'left'}}>{contactUsContent.instagram}</LabelBody>
                    </Box>
                </ItemBox>

                <ItemBox>
                    <ItemIconBox>
                        <EmailIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                        <LabelHead>ایمیل</LabelHead>
                        <LabelBody sx={{direction: 'rtl',  textAlign: 'left'}}>{contactUsContent.email}</LabelBody>
                    </Box>
                </ItemBox>

                <ItemBox>
                    <ItemIconBox>
                        <CallIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                        <LabelHead>ایمیل</LabelHead>
                        <LabelBody sx={{direction: 'rtl', textAlign: 'left'}}>{contactUsContent.phone_number}</LabelBody>
                    </Box>
                </ItemBox>


                <ItemBox>
                    <ItemIconBox>
                        <LocationIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                    <LabelHead>آدرس</LabelHead>
                    <LabelBody sx={{fontWeight: '500',
                                    fontSize: '12px',
                                    lineHeight: '18px'}}>{contactUsContent.address}</LabelBody>
                    </Box>
                </ItemBox>

                </Grid>
        </MainGrid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ContactUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //