// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../components/GridProfile/GridProfile';
import ShowAddress from '../../../components/ShowAddress/ShowAddress';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setToken, getAllAddress, deleteAddresById } from '../../../api/requests';
import { toast } from 'react-toastify';
import { useLoadingByFunc } from '../../../hooks/loading-hook';
import AbsBtn from '../../../components/GridProfile/AbsBtn/AbsBtn';
import { handlerError } from '../../../utils/plugins';
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
        else handlerError(req.status, nav, toast);
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
        else handlerError(req.status, nav, toast);
    });
    // - - - - - - - - - - - - - - //
    const moveToEditHandler = id => {
        nav(`/profile/address/edit/${id}`);
    }
    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='آدرس ها'>
            <AbsBtn to='/profile/address/add'>افزودن آدرس</AbsBtn>
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