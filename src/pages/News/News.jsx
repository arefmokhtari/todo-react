// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useLimitSkip } from '../../hooks/request-hook';
import { useState } from 'react';
import { getNews } from '../../api/requests';
import { Card, Grid, CardContent, Typography, Box, CardHeader, CardActions, IconButton, Backdrop } from '@mui/material';
import parse from 'html-react-parser';
import { enDate2FaDate, fileApi, type, pageinCal, empty } from '../../utils/plugins';
import Pagein from '../../components/UI/Pagein/Pagein';
import { Label } from '../AboutUs/AboutUs.style';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const News = () => {
    // - - - - - - - - - - - - //
    const [data, setData] = useState({});
    const [showData, setShowData] = useState({});
    const request = useLimitSkip({
        request: getNews,
        success: req => setData(req.data.data),
    });
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto'>
            <Backdrop open={!empty(showData)} 
                    sx={{zIndex: (theme) => theme.zIndex.drawer + 1, display: {md: 'none', xs: 'flex'}}} 
                    onClick={() => setShowData({})}
                >
                    <Grid item xs={11} margin='auto'>
                            <Card sx={{ padding:'0px 12px' }}>
                                <CardHeader 
                                    sx={{
                                        '& .MuiCardHeader-title': {
                                            fontSize: '12px',
                                        },
                                        '& .MuiCardHeader-subheader': {
                                            fontSize: '12px',
                                        },
                                    }}
                                    title={showData.title}
                                    subheader={showData.created_at && enDate2FaDate(showData.created_at)}
                                />
                                <Typography
                                    component={'img'} 
                                    sx={{width: '100%', margin: 'auto', display: 'block'}}
                                    src={showData.image && fileApi(showData.image)}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            maxHeight: '100px',
                                            overflowY: 'scroll',
                                        }}
                                    >
                                        {showData.text && parse(showData.text, {
                                            replace: dom => {
                                                if(type(dom) == 'element' && dom.name == 'br')
                                                    return <span />;

                                                return dom;
                                            }
                                        })}
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <IconButton sx={{
                                        background: '#71D0A0', 
                                        color: 'white', 
                                        borderRadius: '8px',
                                        "&:hover, &.Mui-focusVisible": {
                                            background: '#96f7c6', 
                                        },
                                    }} onClick={() => setShowData({})}>
                                        <VisibilityOffIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
            </Backdrop>
            <Grid item xs={12}><Label>اخبار ها</Label></Grid>
            <Grid item xs={12} md={8} >
                <Grid container spacing={1}>
                {
                    data.data?.map(_news => 
                        <Grid item key={_news.id} xs={12} md={6} lg={4}>
                            <Card sx={{ padding:'0px 12px' }}>
                                <CardHeader 
                                    sx={{
                                        '& .MuiCardHeader-title': {
                                            fontSize: '12px',
                                        },
                                        '& .MuiCardHeader-subheader': {
                                            fontSize: '12px',
                                        },
                                    }}
                                    title={_news.title}
                                    subheader={enDate2FaDate(_news.created_at)}
                                />
                                <Typography
                                    component={LazyLoadImage} 
                                    sx={{height: '140px', margin: 'auto', display: 'block'}}
                                    src={_news.image && fileApi(_news.image)}
                                />
                                <CardContent sx={{'& *':{color: '#594949', fontSize: '14px'}}}>
                                    {parse(_news.text, {
                                        replace: dom => {
                                            if(type(dom) == 'element')
                                                dom.name = 'span';
                                            if(type(dom) == 'text')
                                                dom.data = dom.data.slice(0, 6) + '...';
                                            return dom;
                                        }
                                    })}
                                </CardContent>
                                <CardActions>
                                    <IconButton sx={{
                                        background: '#71D0A0', 
                                        color: 'white', 
                                        borderRadius: '8px',
                                        "&:hover, &.Mui-focusVisible": {
                                            background: '#96f7c6', 
                                        },
                                    }} onClick={() => request.nav(`edit/${_news.id}`)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton sx={{
                                        background: '#71D0A0', 
                                        color: 'white', 
                                        borderRadius: '8px',
                                        "&:hover, &.Mui-focusVisible": {
                                            background: '#96f7c6', 
                                        },
                                    }} onClick={() => setShowData({ ... _news })}>
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} position='relative' sx={{display: {md: 'block', xs: 'none'}}}>
                    <Grid container sx={{
                        width: '100%',
                        height: '100px',
                        position: 'sticky',
                        top: '88px',
                        // background: 'blue',
                    }}>
                        <Grid item xs={11} margin='auto'>
                            <Card sx={{ padding:'0px 12px' }}>
                                <CardHeader 
                                    sx={{
                                        '& .MuiCardHeader-title': {
                                            fontSize: '12px',
                                        },
                                        '& .MuiCardHeader-subheader': {
                                            fontSize: '12px',
                                        },
                                    }}
                                    title={showData.title}
                                    subheader={showData.created_at && enDate2FaDate(showData.created_at) || 'وارد نشده'}
                                />
                                <Typography
                                    component={'img'} 
                                    sx={{width: '100%', margin: 'auto', display: 'block'}}
                                    src={showData.image && fileApi(showData.image)}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            maxHeight: '150px',
                                            overflowY: 'scroll',
                                        }}
                                    >
                                        {showData.text && parse(showData.text, {
                                            replace: dom => {
                                                if(type(dom) == 'element' && dom.name == 'br')
                                                    return <span />;

                                                return dom;
                                            }
                                        })}
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    {/* <IconButton sx={{
                                            background: '#71D0A0', 
                                            color: 'white', 
                                            borderRadius: '8px',
                                            "&:hover, &.Mui-focusVisible": {
                                                background: '#96f7c6', 
                                            },
                                        }} onClick={() => {showData.id && request.nav(`edit/${showData.id}`)}}>
                                            <EditIcon />
                                    </IconButton> */}
                                    <IconButton sx={{
                                        background: '#71D0A0', 
                                        color: 'white', 
                                        borderRadius: '8px',
                                        "&:hover, &.Mui-focusVisible": {
                                            background: '#96f7c6', 
                                        },
                                    }} onClick={() => setShowData({})}>
                                        <VisibilityOffIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid item xs={12}>
                <Pagein count={pageinCal(data.count)} onChange={(_, value) => request.movePageHandler(value)} />
            </Grid>
        </Grid>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default News;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //