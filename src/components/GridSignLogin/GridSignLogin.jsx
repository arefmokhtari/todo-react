// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid } from '@mui/material';
import { ImageGrid, ChildrenBox, GridInput } from './GridSignLogin.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Temp4SignLogin = ({ children }) => (
    <Grid container sx={{direction: 'rtl',height: {xs: '23vh', lg: '100vh'}}}>
        <ImageGrid item md={6} xs={12}>
            <Grid item lg={12} md={12} sx={{backgroundColor: '#71D0A0',width: '100%',height: '100%',}}>
                {/* <img src="" alt="image" /> */}
            </Grid>
        </ImageGrid>
        <Grid item md={6} xs={12} sx={{width: '100%',height: {xs: '77vh',md:'100vh'},}}>
            <GridInput item lg={12} md={12} xl={10}>
                <ChildrenBox>
                    {children}
                </ChildrenBox>
            </GridInput>
        </Grid>
    </Grid>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Temp4SignLogin;