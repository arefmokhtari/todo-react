// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Box, Grid, IconButton } from '@mui/material';
import { ShowAdd, MsgIcon } from './ShowAddress.style';
import ProvIcon from '../UI/ICONS/ProvIcon/ProvIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '../UI/ICONS/HomeIcon/HomeIcon';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ShowAddress = ({ description, province, city }) => {

    return (
        <ShowAdd>
            <Grid container >
                <Grid item xs={10}>
                    <MsgIcon icon={<ProvIcon />} label={province} /> <br />
                    <MsgIcon icon={<HomeIcon />} label={city} />
                    <p style={{paddingRight: '10px'}}>{description}</p>
                </Grid>
                <Grid item xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box>
                        <IconButton>
                            <EditIcon sx={{color: '#71D0A0'}} /> 
                        </IconButton>
                        <IconButton>
                            <DeleteIcon sx={{color: 'red'}} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </ShowAdd>
    );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ShowAddress;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //