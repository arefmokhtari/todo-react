// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid } from '@mui/material';
import { getAboutUs, updateAboutUs } from '../../api/requests';
import { useRequest, requestName } from '../../hooks/request-hook';
import parse from 'html-react-parser';
import { useState } from 'react';
import { url } from '../../api/config';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { GridShowAboutUs, GridShowItems, Label, LabelText, BoxShowText, EditBox, BtnEdit, Image } from './AboutUs.style';
import { BackBtn } from '../../components/EditAndAddCategory/EditAndAddCategory.style';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import EditAbout from './EditAboutUs/EditAboutUs';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AboutUs = () => {
    // - - - - - - - - - - - - //
    const [aboutUs, setAboutUs] = useState({});
    const [edit, setEdit] = useState(false)
    // - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getAboutUs,
            success: req => setAboutUs(req.data),
        },],
    });
    // - - - - - - - - - - - - //
    const onSubmit = async value => await request.requestByLoadingAndToken({
        request: updateAboutUs,
        args: [value],
        showMessage: true,
        success: _ => toggleEdit(),
        start: true,
    });
    // - - - - - - - - - - - - //
    const toggleEdit = () => setEdit(!edit);
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' position='relative' margin='auto'>
            <Grid item xs={12}><Label>درباره ما</Label></Grid>
            {edit && <BackBtn endIcon={<ShortcutIcon />} sx={{width: '90px !important', top: '10px'}} onClick={toggleEdit}>بازگشت</BackBtn>}
        <GridShowAboutUs item xs={12} sm={12} lg={10} xl={10} >
            <Grid item xs={11} sx={{margin: 'auto'}}>
                {edit?<EditAbout aboutUs={aboutUs} onSubmit={onSubmit} />:<GridShowItems container>
                    <Grid item xs={12} md={6}>
                        <BoxShowText>
                            <LabelText>متن</LabelText>
                            {parse(aboutUs.text || '')}
                        </BoxShowText>
                        <EditBox sx={{display: {xs: 'block', md: 'none'}}}>
                            <BtnEdit variant='outlined' endIcon={<ArrowLeftIcon />} onClick={toggleEdit}>اعمال تغییرات</BtnEdit>
                        </EditBox>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image 
                            sx={{marginTop: '25px',}}
                            src={aboutUs.image?`${url}/${aboutUs.image}`:''}
                        />
                        <EditBox sx={{display: {md: 'block', xs: 'none'}}}>
                            <BtnEdit variant='outlined' endIcon={<ArrowLeftIcon />} onClick={toggleEdit}>اعمال تغییرات</BtnEdit>
                        </EditBox>
                    </Grid>
                </GridShowItems>}
            </Grid>
        </GridShowAboutUs>
        </Grid>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AboutUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //