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
import { fileApi, pageinCal } from '../../utils/plugins';
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
    const MovePagHandler = value => request.setSkip(preState => ({... preState, skip: (value-1)*10}));
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
                    }}>
                        {
                            importantNews.important?.data?.map(_new => 
                            <Box key={_new.id} sx={{width: '90% !important',margin: 'auto', display: 'flex !important', height: '100%', alignItems: 'center'}}>
                                <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}
                                >
                                <Box>
                                    <LabelShow sx={{
                                        display: 'block',
                                        textAlign: 'left',
                                        '&::before': {
                                            display: 'none',
                                        },
                                    }}>{_new.title}</LabelShow> 
                                    <Box sx={{
                                        //width: '60%',
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        lineHeight: '213.02%',
                                        color: '#ACABAB',
                                        '& *': {
                                            textAlign: 'left !important',
                                            fontSize: {xs: '12px !important',md: '20px !important'},
                                            lineHeight: '150%',
                                        },
                                    }}>
                                        {parse(_new.text || '')}
                                    </Box>
                                    <Box sx={{
                                        float: 'left',
                                    }}>
                                        <ContiBtn
                                            startIcon={<KeyboardArrowLeftIcon />} 
                                            onClick={() => request.nav(`show/${_new.id}`)}
                                            sx={{
                                                width: {xs: '125px', md: '200px'},
                                                paddingRight: '2px',
                                                height: {xs: '30px', md: '64px'},
                                                fontSize: {xs: '11px', md: '24px'},
                                            }}
                                        >
                                            ادامه
                                    </ContiBtn>
                                    </Box>
                                </Box>
                                    <Box sx={{padding: {xs: '20px 0', md: '0 0'}}}>
                                        <Typography 
                                            sx={{
                                                height: {xs: '110px !important',sm: '180px !important',md: '344px !important'},
                                                marginRight: '10px',
                                            }}
                                            className='rev'
                                            component={LazyLoadImage}
                                            src={fileApi(_new.image)}
                                        />
                                    </Box>
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
                                            {parse(_new.text || '')}
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
                                        {parse(_new.text || '')}
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
                            onChange={(_, value) => MovePagHandler(value)}
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