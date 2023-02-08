// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getAddress } from '../../../api/requests';
import { BackBtn } from '../../../components/EditAndAddCategory/EditAndAddCategory.style';
import Pagein from '../../../components/UI/Pagein/Pagein';
import { useLimitSkip, defaultSkip } from '../../../hooks/request-hook';
import { Label } from '../../AboutUs/AboutUs.style';
import { LabelShow, GridShow } from '../../DiscountCode/DiscountCode.style';
import { pageinCal, } from '../../../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const UserAddress = () => {
    // - - - - - - - - - - - - //
    const { id } = useParams();
    const [address, setAddress] = useState({});
    // - - - - - - - - - - - - //
    const request = useLimitSkip({
        request: getAddress,
        success: req => setAddress(req.data.data),
        state: {
            ... defaultSkip,
            user_id: id,
        },
    });
    // - - - - - - - - - - - - //
    return (
        <Grid container maxWidth='xl' margin='auto'>
            <Grid item xs={12}><Label>آدرس</Label></Grid>
            <BackBtn onClick={() => request.nav('/users')}>بازگشت</BackBtn>
            <Grid item xs={10} margin='auto' sx={{boxShadow: '0 0 6px 0 rgba(0,0,0,.2)', borderRadius: '4px'}}>
                <Grid container>
                    {
                        address.data?.map(addr => 
                        <GridShow item xs={11} md={address.count%2==0?5:11} key={addr.id}>
                            <Grid container>
                                <Grid item xs={6} md={3}>
                                    <LabelShow sx={{width: '50%'}}>
                                        شهر
                                    </LabelShow>
                                    <Typography sx={{padding: '10px', margin: '0', color: '#515151'}} paragraph>{addr.province}</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <LabelShow sx={{width: '50%'}}>
                                        استان
                                    </LabelShow>
                                    <Typography sx={{padding: '10px', margin: '0', color: '#515151'}} paragraph>{addr.city}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <LabelShow sx={{width: 'max-content'}}>
                                        آدرس کامل
                                    </LabelShow>
                                    <Typography sx={{padding: '10px', margin: '0', color: '#515151'}} paragraph>{addr.description}</Typography>
                                </Grid>
                            </Grid>
                        </GridShow>
                        )
                    }
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Pagein count={pageinCal(address.count)} onChange={(_, value) => request.movePageHandler(value)} />
            </Grid>
        </Grid>
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default UserAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //