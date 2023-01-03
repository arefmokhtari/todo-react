// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { Button } from '@mui/material';
import GridProfile from '../../components/GridProfile/GridProfile';
import ShowAddress from '../../components/ShowAddress/ShowAddress';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setToken, getAllAddress, deleteAddresById } from '../../api/requests';
import { toast } from 'react-toastify';
import { useLoadingByFunc } from '../../hooks/loading-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const Address = () => {
    // - - - - - - - - - - - - - - //
    const nav = useNavigate();
    const [address, setAddress] = useState([]);
    const loading = useLoadingByFunc();
    // - - - - - - - - - - - - - - //
    const toggleAddress = async () => {
        const req = await getAllAddress();
        if(req.ok)
            setAddress(req.data.data);
        else toast.error('مشکلی پیش آمده');
    }
    // - - - - - - - - - - - - - - //
    useEffect(() => {
        if(!localStorage.getItem('token')) nav('/signup');
        else
            (async () => await loading(async () => {
                setToken(localStorage.getItem('token'));
                await toggleAddress();
            }))();
    },[]);
    // - - - - - - - - - - - - - - //
    const deleteAddHandler = async id => await loading(async () => {
        setToken(localStorage.getItem('token'));
        const req = await deleteAddresById(id);
        await toggleAddress();
        if(req.ok)
            toast.success('انجام شد');
        else toast.error('مشکلی پیش آمده');
    });
    // - - - - - - - - - - - - - - //
    const moveToEditHandler = id => {
        nav(`/profile/address/edit/${id}`);
    }
    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='آدرس ها'>
            <Button to='/profile/address/add' component={Link} variant='contained' sx={{
                position: 'absolute',
                top: '10px',
                right: '30px',
                backgroundColor: '#71D0A0 !important',
                boxShadow: '0 0 0 0 !important',
            }}>افزودن آدرس</Button>
            {
                address.map(address => <ShowAddress edit={moveToEditHandler} delete={deleteAddHandler} key={address.id} {... address} />)
            }
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Address;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //