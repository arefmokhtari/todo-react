// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid } from '@mui/material';
import AboutUsIcon from '../../components/UI/ICONS/AboutUsIcon/AboutUsIcon';
import { IconBox, ShowLabel, Image, MainGrid, BtnContectUs, ShowData } from './AboutUs.style';
import { useRequest, requestName } from '../../hooks/request-hook';
import { getAboutUs } from '../../api/requests';
import { useState } from 'react';
import parse from 'html-react-parser';
import { fileApi } from '../../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AboutUs = () => {
    // - - - - - - - - - - //
    const [aboutUs, setAboutUs] = useState({});
    // - - - - - - - - - - //
    useRequest({
        ingnoreToken: true,
        start: [{
            requestName: requestName.BYLOADING, 
            request: getAboutUs,
            success: req => setAboutUs(req.data),
        },],
    })
    // - - - - - - - - - - //
    return (
        <Grid container sx={{margin: 'auto',marginTop: '100px'}} maxWidth='xl'>
            <MainGrid item xs={11}>
                <IconBox><AboutUsIcon /></IconBox>

                <Grid item xs={12}>
                    <ShowLabel>
                        درباره ما
                    </ShowLabel>
                </Grid>


                <Grid item xs={12} md={10} sx={{margin: 'auto', '& *': {color: '#585858', textAlign: 'justify'}}}>
                    <ShowData>
                        {parse(aboutUs.text || '')}
                    </ShowData>
                </Grid>
                <Grid item xs={12} md={10} sx={{margin: 'auto', marginTop: '38px'}}>
                    <Image 
                        alt=''
                        src={fileApi(aboutUs.image)}
                    />
                </Grid>
                <Grid item xs={12} md={10} sx={{margin: 'auto', marginTop: '38px', marginBottom: '64px'}} display='flex' justifyContent='center'>
                    <BtnContectUs to='/contact-us'>
                        تماس با ما
                    </BtnContectUs>
                </Grid>
            </MainGrid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AboutUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //