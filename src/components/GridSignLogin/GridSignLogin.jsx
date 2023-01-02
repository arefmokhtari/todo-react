// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './GridSignLogin.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Temp4SignLogin = ({ children }) => (
    <Container maxWidth="xl" disableGutters={true}>
    <Grid container className='main-grid4signupcom'>
        <Grid item md={6} xs={12} className='grid4signupcom4img'>
            <Grid item lg={12} md={12} className='grid4signupcom4img-img'>
                {/* <img src="" alt="image" /> */}
            </Grid>
        </Grid>
        <Grid item md={6} xs={12} className='grid4signupcominputmain'>
            <Grid item lg={12} md={12} className='grid4signupcominputmaininput'>
                <div className='centerinputhandinmaininput' >
                    {children}
                </div>
            </Grid>
        </Grid>
    </Grid>
    </Container>
)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Temp4SignLogin;