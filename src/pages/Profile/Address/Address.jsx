// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import GridProfile from '../../../components/GridProfile/GridProfile';
import ShowAddress from '../../../components/ShowAddress/ShowAddress';
import { useState } from 'react';
import { getAllAddress, deleteAddresById } from '../../../api/requests';
import AbsBtn from '../../../components/GridProfile/AbsBtn/AbsBtn';
import { useRequest } from '../../../hooks/request-hook';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Address = () => {
    // - - - - - - - - - - - - - - //
    const [address, setAddress] = useState([]);
    const request = useRequest({
        start: {
            requestName: 'requestByLoadingAndToken',
            request: getAllAddress,
            success: req => setAddress(req.data.data),
        },
    });
    // - - - - - - - - - - - - - - //
    const deleteAddHandler = async id => await request.requestByLoadingAndToken({
        request: deleteAddresById,
        args: [id],
        start: true,
    });
    // - - - - - - - - - - - - - - //
    return (
        <GridProfile msg='آدرس ها'>
            <AbsBtn to='/profile/address/add'>افزودن آدرس</AbsBtn>
            {
            address.map(address => <ShowAddress edit={id => request.nav(`/profile/address/edit/${id}`)} delete={deleteAddHandler} key={address.id} {... address} />)
            }
        </GridProfile>
    );
    // - - - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Address;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //