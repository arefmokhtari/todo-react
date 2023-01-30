// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useParams } from 'react-router'
import { useRequest, requestName } from '../../../hooks/request-hook';
import { getNewsById } from '../../../api/requests';
import { Button, Grid, Box } from '@mui/material';
import { useState } from 'react';
import { MainGrid, IconBox, ShowData, Image } from '../../AboutUs/AboutUs.style';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import parse from 'html-react-parser';
import { fileApi } from '../../../utils/plugins';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ShowLabel } from './NewsShow.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const NewsShow = () => {
    // - - - - - - - - - - //
    const [news, setNews] = useState({});
    const { id } = useParams();
    // - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADING,
            request: getNewsById,
            args: [id],
            success: req => setNews(req.data.data),
        },],
    });
    // - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto' marginTop='100px'>
            <MainGrid item xs={11} margin='auto'>
                <IconBox>
                    <FiberNewIcon 
                        sx={{
                            width: {md: '50px', xs: '37px'}, 
                            height: {md: '50px', xs: '37px'},
                            color: '#4DC488',
                        }}
                    />
                </IconBox>

                <Grid item xs={12} overflow='hidden' position='relative'>
                    <Button
                    onClick={() => request.nav('/news')}
                    startIcon={<ArrowRightAltIcon />} 
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: '#4DC488',
                    }}>بازگشت</Button>
                    <Box sx={{position: 'relative'}}>
                        <Box sx={{
                            position: 'absolute', 
                            width: '90%', 
                            height: '3px',
                            top: '40%',
                            left: 0,
                            right: 0, 
                            marginLeft: 'auto',
                            marginRight: 'auto', 
                            background: '#E2E2E2'
                        }} />
                        <ShowLabel>{news.title}</ShowLabel>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}  sx={{margin: 'auto'}}>
                            <Image 
                                sx={{width: '60%', height: 'auto'}}
                                alt=''
                                src={news.image && fileApi(news.image)}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{'& *': {color: '#585858', textAlign: 'justify', margin: '16px auto'}}}>
                            <ShowData sx={{width: '80%',}}>
                                {parse(news.text || '')}
                            </ShowData>
                        </Grid>
                    </Grid>
                </Grid>
            </MainGrid>
        </Grid>
    );
    // - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default NewsShow;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //