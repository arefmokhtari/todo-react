// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Box, Typography, styled, Button, IconButton } from '@mui/material';
import { useLimitSkip, requestName } from '../../hooks/request-hook';
import { getNews } from '../../api/requests';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import pic from './computer-screens-running-programming-code-empty-software-developing-agency-office-computers-parsing-data-algorithms-background-neural-network-servers-cloud-computing-data-room 1.jpg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const BoxShow = styled(props => <Box {...props} />)(({}) => ({
    cursor: 'pointer',
    color: '#ACABAB',
    display: 'block',
    paddingBottom: '28px',
    borderBottom: '1px solid #D9D9D9',
    marginBottom: '20px',
}));
export const LabelShow = styled(props => <Typography component='h1' {...props} />)(({}) => ({
    color: '#4DC488',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '213.02%',
    breakBefore: 'always',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
        content: '" "',
        width: '5px',
        height: '36px',
        backgroundColor: '#4DC488',
        display: 'inline-block',
        borderRadius: '2.5px',
        marginRight: '10px',
    },
}));

export const BoxImage = styled(Box)(({}) => ({
    width: '150px',
    height: '126px',
    background: '#4DC488',
    '& img':{
        opacity: .6,
    },
    borderRadius: '20px',
    overflow: 'hidden',
}));

export const BoxImportantImage = styled(Box)(({}) => ({
    width: '100%',
    height: '442px',
    background: '#4DC488',
    opacity: .3,
    borderRadius: '20px',
    margin: 'auto',
}));
export const ContiBtn = styled(props => <Button variant='outlined' {...props}/>)(({}) => ({
    width: '100%',
    height: '64px',
    border: '2px solid #4DC488 !important',
    borderRadius: '8px',
    color: '#4DC488',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '213.02%',
}));

export const GridSlider = styled(props => <Grid item xs={12} {...props} />)(({}) => ({
    height: '344px',
    background: '#EDEDED',
    borderRadius: '24px',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    margin: '80px auto',
    position: 'relative',
}));

export const ForwardSlider = styled(IconButton)(({}) => ({
    position: 'absolute',
    top: '45%',
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const News = () => {
    // - - - - - - - - - - //
    const [news, setNews] = useState({});
    const [importantNews, setImportantNews] = useState({});
    // - - - - - - - - - - //
    const request = useLimitSkip({
        requestName: requestName.BYLOADING,
        request: getNews,
        success: req => setNews(req.data.data),
        state: {
            limit: 10,
            skip: 0,
            is_important: 0,
        },
    }, {
        ingnoreToken: true,
        start: [{
            requestName: requestName.BYLOADING,
            request: getNews,
            args: ['?is_important=1'],
            success: req => setImportantNews(req.data.data),
        },],
    });
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto'>
            <Grid item xs={11} margin='auto'>
                <GridSlider>
                    <ForwardSlider sx={{right: '10px'}}>
                        <ArrowBackIcon />
                    </ForwardSlider>
                    <ForwardSlider sx={{left: '10px'}}>
                        <ArrowForwardIcon />
                    </ForwardSlider>
                </GridSlider>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {importantNews.data?.map(_new => (
                                <BoxShow key={_new.id}>
                                    <LabelShow>
                                        شرکت نرم افزاری داده کاو وب در سال ۱۳۹۶
                                    </LabelShow>
                                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                                        <BoxImage>
                                            <LazyLoadImage 
                                                src={pic}
                                            />
                                        </BoxImage>
                                        <Box sx={{width: 'calc(95% - 126px)', marginLeft: '10px'}}>
                                        <p>شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن </p>
                                        </Box>       
                                    </Box>
                                </BoxShow>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: {md: 'block', xs: 'none'}}}>
                        <Grid container display='flex' justifyContent='end'>
                            <Grid item xs={11}>
                            {importantNews.data?.slice(0,2).map(_news =>
                                <Box key={_news.id} sx={{marginBottom: '10px'}}>
                                    
                                    <BoxImportantImage>

                                    </BoxImportantImage>
                                    <LabelShow>
                                        شرکت نرم افزاری داده کاو وب در سال ۱۳۹۶
                                    </LabelShow>
                                    <Box sx={{
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        lineHeight: '213.02%',
                                        color: '#ACABAB',
                                    }}>
                                    شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن 
                                    </Box>
                                    <ContiBtn endIcon={<KeyboardArrowLeftIcon />}>
                                        ادامه
                                    </ContiBtn>
                                </Box>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default News;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //