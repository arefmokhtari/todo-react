// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Box, Typography } from '@mui/material';
import { useLimitSkip, requestName } from '../../hooks/request-hook';
import { getNews } from '../../api/requests';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useRef } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import parse from 'html-react-parser';
import { fileApi, pageinCal, type } from '../../utils/plugins';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GridSlider, ForwardSlider, settings, LabelShow, BoxShow, ContiBtn, BoxImage, BoxImportantImage, BoxParse } from './News.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const News = () => {
    // - - - - - - - - - - //
    const slider = useRef();
    const [news, setNews] = useState({});
    const [importantNews, setImportantNews] = useState({importantMain: [], important: {}});
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
            success: req => setImportantNews({
                importantMain: req.data.data.data.slice(0, 2),
                important: req.data.data.count>2?{count: req.data.data.count-2,data: req.data.data.data.slice(2)}:{count: 0,data: []},
            }),
            //oneStart: true,
        },],
    });
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto'>
            <Grid item xs={11} margin='auto'>
                <GridSlider>
                    <ForwardSlider sx={{right: '10px', zIndex: 1}} onClick={() => slider.current.slickGoTo(1)}>
                        <ArrowBackIcon />
                    </ForwardSlider>
                    <ForwardSlider sx={{left: '10px', zIndex: 1}} onClick={() => slider.current.slickGoTo(0)}>
                        <ArrowForwardIcon />
                    </ForwardSlider>
                    <Box component={Slider} {...settings} ref={slider} sx={{
                        height: {xs: '208px !important',md: '344px !important'},
                        WebkitTransform: 'scaleX(-1)',
                        '& .slick-arrow': {
                            display: 'none !important',
                        }
                
                    }}>
                        {
                            importantNews.important?.data?.map(_new => 
                                <Box key={_new.id} sx={{
                                    width: '100%',
                                    height: {md: '344px', xs: '208px'},
                                    //background: '#4DC488',
                                    '& img':{
                                        //opacity: .4,
                                        zIndex: -1,
                                    },
                                    position: 'relative',
                                    display: 'flex !important',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                    <Typography 
                                        component={LazyLoadImage}
                                        src={fileApi(_new.image)}
                                        sx={{
                                            //width: '100%',
                                            position: 'absolute',
                                            width: '100%',
                                            top: '0'
                                        }} />
                                        <Box sx={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: '0',
                                            background: '#4DC488',
                                            opacity: 0.5,
                                        }} />
                                        <Typography component='h1' sx={{
                                            color: '#4DC488',
                                            fontSize: '38px',
                                           // width: '100%',
                                            //textAlign: 'left',
                                        }}>
                                        {_new.title}
                                        </Typography>
                                        <Box sx={{
                                        width: '80%',
                                        fontWeight: 400,
                                        fontSize: {md: '24px', xs: '14px'},
                                        lineHeight: '213.02%',
                                        color: 'white',
                                        margin: '0 auto',
                                        '& *': {
                                            textAlign: 'center !important',
                                        },
                                        
                                    }}>
                                        {parse(_new.text || '', {
                                        replace: dom => {
                                            if(type(dom) == 'element' && dom.name == 'br')
                                                return <span />;

                                            return dom;
                                        }})}
                                    </Box>
                                    <Box >
                                    <ContiBtn
                                            startIcon={<KeyboardArrowLeftIcon />} 
                                            onClick={() => request.nav(`show/${_new.id}`)}
                                            sx={{
                                                width: {xs: '125px', md: '200px'},
                                                paddingRight: '2px',
                                                height: {xs: '30px', md: '64px'},
                                                fontSize: {xs: '11px', md: '28px'},
                                                border: '4px solid #4DC488 !important',
                                            }}
                                        >
                                            ادامه
                                    </ContiBtn>
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </GridSlider>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {news.data?.map(_new => (
                                <BoxShow key={_new.id} onClick={() => request.nav(`show/${_new.id}`)}>
                                    <LabelShow>{_new.title}</LabelShow>
                                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                                        <BoxImage>
                                            <LazyLoadImage 
                                                src={fileApi(_new.image)}
                                            />
                                        </BoxImage>
                                        <BoxParse>
                                            {parse(_new.text || '', {
                                            replace: dom => {
                                                if(type(dom) == 'element' && dom.name == 'br')
                                                    return <span />;

                                                return dom;
                                            }})}
                                        </BoxParse>       
                                    </Box>
                                </BoxShow>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: {md: 'block', xs: 'none'}}}>
                        <Grid container display='flex' justifyContent='end'>
                            <Grid item xs={11}>
                            {importantNews.importantMain?.map(_new =>
                                <Box key={_new.id} sx={{marginBottom: '10px'}}>
                                    <BoxImportantImage>
                                            <Typography 
                                                component={LazyLoadImage}
                                                src={fileApi(_new.image)}
                                                sx={{
                                                    //width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                    </BoxImportantImage>
                                    <LabelShow>{_new.title}</LabelShow>
                                    <Box sx={{
                                        width: '100%',
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        lineHeight: '213.02%',
                                        color: '#ACABAB',
                                        
                                    }}>
                                        {parse(_new.text || '', {
                                        replace: dom => {
                                            if(type(dom) == 'element' && dom.name == 'br')
                                                return <span />;

                                            return dom;
                                        }})}
                                    </Box>
                                    <ContiBtn endIcon={<KeyboardArrowLeftIcon />} onClick={() => request.nav(`show/${_new.id}`)}>
                                        ادامه
                                    </ContiBtn>
                                </Box>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{margin: 'auto'}}>
                    <Stack spacing={2}>
                        <Pagination
                            sx={{
                                margin: 'auto',
                                "& .Mui-selected": {
                                    background: "white !important", 
                                    color: '#4DC488',
                                },
                                '& *': {
                                    fontFamily: 'Salamat !important',
                                },
                                //'& .MuiButtonBase-root':{paddingTop: '6px'}
                            }}
                            count={pageinCal(news.count)}
                            onChange={(_, value) => request.movePageHandler(value)}
                            renderItem={item => (
                                <PaginationItem
                                    slots={{ previous: KeyboardArrowRightIcon, next: KeyboardArrowLeftIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default News;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //