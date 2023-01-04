// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import AbsBtn from '../../../components/GridProfile/AbsBtn/AbsBtn';
import GridProfile from '../../../components/GridProfile/GridProfile';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import { en2fa, handlerError } from '../../../utils/plugins'; 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Wallet = () => {
    // - - - - - - - - - - - - - - //
    const loading = useLoadingByFunc();
    const nav = useNavigate();
    const [wallet, setWallet] = useState('');
    // - - - - - - - - - - - - - - //
    useEffect(() => {
        if(!localStorage.getItem('token')) nav('/signup');
        else { 
            (async () => await loading(async () => {
                const req = { ok: true, status: 200, data: '343242342342' } //
                if(req.ok)
                    setWallet(req.data);
                else handlerError(req.status, nav, toast);
            }))();
        }
    }, []);

    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='کیف پول'>
            <AbsBtn to='/profile/show'>بازگشت</AbsBtn>
            <Typography sx={{textAlign: 'center', marginTop: '30px'}} component='h2' variant='h5'>
                <Typography component='span' variant='h5' sx={{padding: '15px',borderBottom: '2px solid #71D0A0',}}>پول شما</Typography>
            </Typography>
            <Typography sx={{textAlign: 'center', margin: '50px', color: 'gray'}} component='h2' variant='h6'>
                <span style={{color: 'black'}}>تومان</span> {en2fa(wallet)}
            </Typography>
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Wallet;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //