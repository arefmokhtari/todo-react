// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Grid, styled, Typography } from '@mui/material';
import MainGrid from '../../components/MainGrid/MainGrid';
import { ShowLabel, BoxIcon, BtnSend, Text } from './ContactUs.style';
import SmsIcon from '../../components/UI/ICONS/ContectUsIcons/SmsIcon/SmsIcon';
import InstagramIcon from '../../components/UI/ICONS/ContectUsIcons/InstagramIcon/InstagramIcon';
import EmailIcon from '../../components/UI/ICONS/ContectUsIcons/EmailIcon/EmailIcon';
import CallIcon from '../../components/UI/ICONS/ContectUsIcons/CallIcon/CallIcon';
import LocationIcon from '../../components/UI/ICONS/ContectUsIcons/LocationIcon/LocationIcon';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const GridInput = styled(Grid)({
    border: '2px solid #D9D9D9',
    borderRadius: '16px',
});


export const ItemBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '96px',
    border: '2px solid #D9D9D9',
    borderRadius: '16px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: '16px',
    },
}));

export const ItemIconBox = styled(Box)(({}) => ({
    width: '72px',
    height: '72px',
    background: '#4DC488',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 12px',
}));

export const LabelHead = styled(props => <Typography component='h1' {...props}/>)(({}) => ({
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#727272',
}));

export const LabelBody = styled(props => <Typography paragraph {...props}/>)(({}) => ({
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    marginBottom: '2px',
    color: '#4F4F4F',
}));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const ContactUs = () => {


    return (
        <MainGrid marginTop='100px'>
                <GridInput item xs={12} md={8} lg={9} sx={{position: 'relative'}}>
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
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Text
                                        sx={{width: '100%'}}
                                        label='شماره تماس'
                                    />
                                </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{marginTop: '24px'}}>
                            <Text
                                sx={{width: '100%'}}
                                label='ایمیل'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{marginTop: '24px'}}>
                            <Text
                                sx={{width: '100%'}}
                                label='پیام'
                                maxRows={5}
                                minRows={5}
                                multiline
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sx={{margin: '24px auto'}}>
                            <BtnSend variant='contained'>
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
                        <LabelBody sx={{direction: 'rtl',  textAlign: 'left'}}>@Barlux_social.media</LabelBody>
                    </Box>
                </ItemBox>

                <ItemBox>
                    <ItemIconBox>
                        <EmailIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                        <LabelHead>ایمیل</LabelHead>
                        <LabelBody sx={{direction: 'rtl',  textAlign: 'left'}}>farshadfar2702@gmail.com</LabelBody>
                    </Box>
                </ItemBox>

                <ItemBox>
                    <ItemIconBox>
                        <CallIcon />
                    </ItemIconBox>
                    <Box sx={{width: 'calc(100% - 72px)'}}>
                        <LabelHead>ایمیل</LabelHead>
                        <LabelBody sx={{direction: 'rtl', textAlign: 'left'}}>09384762702</LabelBody>
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
                                    lineHeight: '18px'}}>قائمشهر خیابان بابل امیر کبیر مجتمع امیر طبقه سوم</LabelBody>
                    </Box>
                </ItemBox>

                </Grid>
        </MainGrid>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ContactUs;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //