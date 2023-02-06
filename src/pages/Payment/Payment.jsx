// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { useState } from 'react';
import { getAllAddress } from '../../api/requests';
import { requestName, useRequest } from '../../hooks/request-hook';
import { AddressText, AllPrice, BtnPay, EditButton, EndPeimentTitle, Price4Handl, Price4Send, SelectOptAddr, SelectTimeText, SelectTimeTitle, TitleAddress } from './Payment.style';
import LocationPayIcon from '../../components/UI/ICONS/Payment/LocationPayIcon/LocationPayIcon';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import TickCircleIcon from '../../components/UI/ICONS/Payment/TickCircleIcon/TickCircleIcon';
import { en2fa } from '../../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Payment = () => {
    // - - - - - - - - - - - - - - //
    const [address, setAddress] = useState({});
    // - - - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getAllAddress,
            success: req => setAddress(req.data),
        },],
    });
    console.log(address);
    // - - - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='80px auto'>
            <Grid item xs={11} margin='auto'>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <Box sx={{
                            //height: '163px',
                            border: '1px solid #D9D9D9',
                            borderRadius: '8px',
                            padding: '6px 16px',
                        }}>
                            <TitleAddress>آدرس تحویل سفارش</TitleAddress>
                            {
                            address.data?.map((addr, index) => 
                                <Box key={addr.id} sx={{
                                    padding: '10px 0',
                                    borderBottom: index == address.count - 1?'':'1px solid #D9D9D9',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        }}>
                                            <LocationPayIcon />
                                            <AddressText>
                                                {addr.province}, {addr.city}, {addr.description}
                                            </AddressText>
                                        </Box>
                                        <Box>
                                            <Checkbox 
                                                edge="start"
                                                // checked={categorires.filter.includes(category.id)}
                                                // tabIndex={category.id}
                                                disableRipple
                                                sx={{
                                                    [`&, &.${checkboxClasses.checked}`]: {
                                                      color: '#4DC488',
                                                    },
                                                  }}
                                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${1}` }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: {md: 'start', xs: 'end'},
                                    }}>
                                        <EditButton component={Link} to={`/profile/address/edit/${addr.id}`} endIcon={<KeyboardArrowLeftIcon/>}>تغییر | ویرایش</EditButton>    
                                    </Box>
                                </Box> 
                            )
                            }
                        </Box>

                        <Box sx={{
                            border: '1px solid #D9D9D9',
                            borderRadius: '8px',
                            width: '100%',
                            //height: '253px',
                            marginTop: '27px',
                            padding: '0 16px',
                        }}>
                            <SelectTimeTitle>انتخاب زمان ارسال</SelectTimeTitle>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <TickCircleIcon />
                                <SelectTimeText>تحویل فوری در سریعترین زمان ممکن (8 تا 24)</SelectTimeText>
                            </Box>
                            <FormControl sx={{marginTop: '20px'}}>
                                <SelectOptAddr id='demo-controlled-radio-buttons-group'>روش پرداخت</SelectOptAddr>
                                <RadioGroup
                                    aria-labelledby='demo-controlled-radio-buttons-group'
                                    name='controlled-radio-buttons-group'
                                    // value={value}
                                    // onChange={handleChange}
                                    sx={{
                                        display: 'inline-block',
                                        marginLeft: {md: '47px', xs: '40px'},
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <FormControlLabel value='female' sx={{color: '#A9A9A9',}} control={<Radio size='small' sx={{color: '#A9A9A9','&.Mui-checked': {color: '#4DC488'}}} />} label='درب منزل' />
                                    <FormControlLabel value='male' sx={{color: '#A9A9A9',}} control={<Radio size='small' sx={{color: '#A9A9A9','&.Mui-checked': {color: '#4DC488'}}} />} label='کیف پول' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            width: '100%',
                            position: 'sticky',
                            top: '20px',  
                        }}>
                            <Box sx={{
                                width: '100%',
                                border: '1px solid #D9D9D9',
                                borderRadius: '8px',
                                padding: '0 38px',
                            }}>
                                <EndPeimentTitle>پرداخت نهایی</EndPeimentTitle>
                                <AllPrice>مبلغ کل خرید: {en2fa(5000)} تومان</AllPrice>
                                <Price4Send>هزینه ارسال: {en2fa(4000)} تومان</Price4Send>
                                <Price4Handl>مبلغ قابل پرداخت: {en2fa(4000)} تومان</Price4Handl>
                                <BtnPay>پرداخت نهایی</BtnPay>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                // border: '1px solid #D9D9D9',
                                borderRadius: '8px',
                                padding: '10px',
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#4DC488',
                                boxShadow: '0 0 16px 0 rgba(0,0,0,.2)'
                            }}>
                                <Button>اعمال کد</Button>
                                <TextField sx={{
                                    '& .MuiInputBase-input': {
                                        color: '#fff1f1',
                                    },
                                    '& .MuiFormLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiFilledInput-root::after': {
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.42) !important',
                                    },
                                }} label="کد تخفیف" variant="filled" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Payment;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //