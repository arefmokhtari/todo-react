import { Typography } from "@mui/material";
import AbsBtn from "../../../components/GridProfile/AbsBtn/AbsBtn";
import GridProfile from "../../../components/GridProfile/GridProfile";
import { en2fa } from '../../../utils/plugins'; 

const Wallet = () => {


    return (
        <GridProfile msg='کیف پول'>
            <AbsBtn to='/profile/show'>بازگشت</AbsBtn>
            <Typography sx={{textAlign: 'center', marginTop: '30px'}} component='h2' variant='h5'>
                <Typography component='span' variant='h5' sx={{padding: '15px',borderBottom: '2px solid #71D0A0',}}>پول شما</Typography>
            </Typography>
            <Typography sx={{textAlign: 'center', margin: '50px', color: 'gray'}} component='h2' variant='h6'>
                <span style={{color: 'black'}}>تومان</span> {en2fa('343242342342')}
            </Typography>
        </GridProfile>
    );
}

export default Wallet;