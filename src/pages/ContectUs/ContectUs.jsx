// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Avatar, CardActions, CardContent, CardHeader, Chip, Grid, Stack, Backdrop, Box } from '@mui/material';
import { Label } from '../AboutUs/AboutUs.style';
import { requestName, useLimitSkip } from '../../hooks/request-hook';
import { useState } from 'react';
import { getContectUs, getContectById, getContectUsContect, updateContectUsContect } from '../../api/requests';
import { empty, enDate2FaDate, enNum2FaNum, pageinCal } from '../../utils/plugins';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShowMessageContectUs, { MessageCard, BtnClick } from '../../components/ContectUs/ShowMessageContectUs/ShowMessageContectUs';
import { useFormik } from 'formik';
import ContectUsContect from '../../components/ContectUs/ContectUsContect/ContectUsContect';
import Pagein from '../../components/UI/Pagein/Pagein';
import { contectUsValidate } from '../../validates/discountCodeValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ContectUs = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: updateContectUsContect,
        args: [values],
        showMessage: true,
    });
    // - - - - - - - - - - - - //
    const [messages, setMessages] = useState({});
    const [showingMessage, setShowingMessage] = useState({});
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            address: '',
            email: '',
            instagram: '',
            phone_number: '',
        },
        validationSchema: contectUsValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        requestName: requestName.BYLOADINGANDTOKEN,
        request: getContectUs,
        success: req => setMessages(req.data[0]),
    }, {
        start: [{
            requestName: requestName.BYLOADING,
            request: getContectUsContect,
            success: req => formik.setValues(req.data),
        },]
    });
    // - - - - - - - - - - - - //
    const showMessageHandler = async id => await request.requestByLoadingAndToken({
        request: getContectById,
        args: [id],
        success: req => {
            setShowingMessage(req.data[0]);
            request.setSkip(preState => ({... preState}));
        },
    });
    // - - - - - - - - - - - - //
    return ( 
    <Grid container maxWidth='xl' margin='auto'>
                <Backdrop open={!empty(showingMessage)} 
                    sx={{zIndex: (theme) => theme.zIndex.drawer + 1, display: {md: 'none', xs: 'flex'}}} 
                    onClick={() => setShowingMessage({})}
                >
                    <ShowMessageContectUs showingMessage={showingMessage} back={() => setShowingMessage({})} />
                </Backdrop>
        <Grid container>
            <Grid item xs={12}><Label>پیام ها</Label></Grid>
            <Grid item sx={{display: {xs: 'block', md: 'none'}}}>
                <Box sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',width: '100%', margin: '20px auto'}}>
                    <ContectUsContect 
                        formik={formik}
                    />
                </Box>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8} >
                    <Grid container spacing={1}>
                    {
                        messages.data?.map(message => (
                            <Grid item sx={{margin: '10px 0'}} xs={12} md={6} xl={4} key={message.id}>
                                <MessageCard>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: 'red', paddingTop: '3px' }} aria-label="recipe">
                                                {message.full_name.toUpperCase().at(0)}
                                            </Avatar>
                                        }
                                        title={message.full_name}
                                        subheader={enDate2FaDate(message.created_at)}
                                    />
                                    <CardContent>
                                        <Stack sx={{margin: '5px 0'}}>
                                            <Chip sx={{'& .MuiChip-label': {paddingTop: '3px'}}} icon={<PhoneEnabledIcon />} label={enNum2FaNum(message.phone_number)} />
                                        </Stack>
                                        <Stack sx={{margin: '5px 0'}}>
                                            <Chip sx={{'& .MuiChip-label': {paddingTop: '3px'}}} icon={<AlternateEmailIcon />} label={message.email} />
                                        </Stack>
                                        <Stack sx={{margin: '5px 0'}}>
                                            <Chip sx={{'& .MuiChip-label': {paddingTop: '3px'}}} icon={<RemoveRedEyeIcon />} label={message.is_seen?'بله':'خیر'} />
                                        </Stack>
                                    </CardContent>
                                    <CardActions>
                                        <BtnClick onClick={async () => showMessageHandler(message.id)}>نمایش</BtnClick>
                                    </CardActions>
                                </MessageCard>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} sx={{display: {xs: 'none', md: 'block'}, position: 'fixed', width: '29%',marginLeft: '2%', right: '2%'}}>
                    <ShowMessageContectUs showingMessage={showingMessage} back={() => setShowingMessage({})} />
                    <Box sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)',width: '100%', margin: '20px auto'}}>
                        <ContectUsContect 
                            formik={formik}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Pagein count={pageinCal(messages.count)} onChange={(_, value) => request.movePageHandler(value)} />
            </Grid>
        </Grid>
    </Grid> 
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ContectUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //