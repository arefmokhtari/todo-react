// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../components/GridProfile/GridProfile';
import { tokenName, useRequest } from '../../hooks/request-hook';
import { getUserInfo } from '../../api/requests';
import AbsBtn from '../../components/GridProfile/AbsBtn/AbsBtn';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { ShowAdd, MsgIcon } from '../../components/ShowAddress/ShowAddress.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WalletIcon from '@mui/icons-material/Wallet';
import EmailIcon from '@mui/icons-material/Email';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {icon: {color: '#71D0A0 !important',},}
const User = () => {
    const [user, setUser] = useState({});
    const request = useRequest({
        start: [{
            requestName: 'requestByLoadingAndToken',
            request: getUserInfo,
            success: req => setUser(req.data),
        }],
    });
    return ( <>
        <GridProfile msg='حساب کاربری'>
            <AbsBtn to='/profile/edit'>ویرایش</AbsBtn>
            <AbsBtn sx={{right: {xs: '30px',lg: '115px'}, top: {xs: '50px',lg: '10px'}}} to='/change-passwd'>تغییر رمز</AbsBtn>
            <AbsBtn to='/signup' sx={{top: {xs: '90px',lg: '53px'}, backgroundColor: 'red !important'}}onClick={() => localStorage.removeItem(tokenName)}>خروج</AbsBtn>
            <ShowAdd sx={{border: '0'}}>
                <Grid container>
                    <Grid item xs={10} lg={6}>
                    <MsgIcon icon={<AccountCircleIcon sx={configure.icon} />} label={user.name}  />
                    </Grid>
                    <Grid item xs={10} lg={6}>
                        <MsgIcon icon={<PhoneEnabledIcon sx={configure.icon} />} label={user.phone_number || 'وارد نشده'} />
                    </Grid>
                    <Grid item xs={10} lg={6}>
                        <MsgIcon icon={<WalletIcon sx={configure.icon} />} label={user.wallet_amount || 'خالی میباشد'} />
                    </Grid>
                    <Grid item xs={10} lg={6}>
                        <MsgIcon icon={<EmailIcon sx={configure.icon} />} label={user.email} />
                    </Grid>
                </Grid>
            </ShowAdd>
        </GridProfile>
    </> );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default User;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //