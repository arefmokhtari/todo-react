// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { getAllAddress } from '../../api/requests';
import { requestName, useRequest } from '../../hooks/request-hook';
import { AddressText, EditButton, SelectTimeText, SelectTimeTitle, TitleAddress } from './Payment.style';
import LocationPayIcon from '../../components/UI/ICONS/Payment/LocationPayIcon/LocationPayIcon';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import TickCircleIcon from '../../components/UI/ICONS/Payment/TickCircleIcon/TickCircleIcon';
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
                            height: '253px',
                            marginTop: '27px',
                        }}>
                            <SelectTimeTitle>انتخاب زمان ارسال</SelectTimeTitle>
                            <SelectTimeText>تحویل فوری در سریعترین زمان ممکن (8 تا 24)</SelectTimeText>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            width: '100%',
                            height: '443px',
                            border: '1px solid #D9D9D9',
                            borderRadius: '8px',
                            position: 'sticky',
                            top: '20px',
                        }}>

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