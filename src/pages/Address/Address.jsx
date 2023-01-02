// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { Button } from '@mui/material';
import GridProfile from '../../components/GridProfile/GridProfile';
import ShowAddress from '../../components/ShowAddress/ShowAddress';
import { Link } from 'react-router-dom';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const Address = () => {

    
    return (
        <GridProfile msg='آدرس ها'>
            <Button to='/profile/address/add' component={Link} variant='contained' sx={{
                position: 'absolute',
                top: '10px',
                right: '30px',
                backgroundColor: '#71D0A0 !important',
                boxShadow: '0 0 0 0 !important',
            }}>افزودن آدرس</Button>
            <ShowAddress province='مازندران' city='قاعمشهر' description='مازندران، قائم شهر، آزادی' />
            <ShowAddress province='مازندران' city='قاعمشهر' description='مازندران، قائم شهر، آزادی' />
            <ShowAddress province='مازندران' city='قاعمشهر' description='مازندران، قائم شهر، آزادی' />
            <ShowAddress province='مازندران' city='قاعمشهر' description='مازندران، قائم شهر، آزادی' />
        </GridProfile>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Address;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //