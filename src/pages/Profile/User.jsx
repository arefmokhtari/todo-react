// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../components/GridProfile/GridProfile';
import { tokenName, useRequest } from '../../hooks/request-hook';
import { getUserInfo } from '../../api/requests';
import { useState } from 'react';
import { Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import { ShowAdd, MsgIcon } from '../../components/ShowAddress/ShowAddress.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WalletIcon from '@mui/icons-material/Wallet';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {icon: {color: '#71D0A0 !important',},}
const User = () => {
    // - - - - - - - - - - - - - - //
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState({});
    const request = useRequest({
        start: [{
            requestName: 'requestByLoadingAndToken',
            request: getUserInfo,
            success: req => setUser(req.data),
        }],
    });
    // - - - - - - - - - - - - - - //
    return ( <>
        <GridProfile msg='حساب کاربری'>
            <Box sx={{position: 'absolute',top: '10px',right: '30px'}}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={anchorEl ? 'long-menu' : undefined}
                    aria-expanded={anchorEl ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={event => setAnchorEl(event.currentTarget)}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    PaperProps={{
                    style: {width: '15ch',},
                    }}
                    sx={{'& *':{fontFamily: 'IRANSansX !important',}}}
                >
                    <MenuItem onClick={() => request.nav('/profile/edit')}>ویرایش</MenuItem>
                    <MenuItem onClick={() => request.nav('/change-passwd')}>تغییر رمز</MenuItem>
                    <MenuItem onClick={() => {localStorage.removeItem(tokenName);request.nav('/');}}>خروج</MenuItem>
                </Menu>
            </Box>
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