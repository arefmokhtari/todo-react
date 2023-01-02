// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BoxMovePage, BtnLink, ShowBox, ShowMsg } from './GridProfile.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const configure = {
    'اطلاعات حساب': '/profile/show',
    'آدرس ها': '/profile/address',
    'سفارشات': '/profile/testt',
    'فاکتور ها': '/profile/test',
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const GridProfile = ({ children, msg }) => (
    <Container maxWidth='xl' disableGutters={true}>
        <Grid container>
            <Grid item xs={10} sx={{margin: 'auto'}}>
                <BoxMovePage>
                    {
                    Object.entries(configure)
                        .map(value => 
                            <BtnLink
                                key={value[0]} 
                                component={NavLink} 
                                to={value[1]}
                                style={({isActive}) => (isActive?{backgroundColor: '#71D0A0', color: 'white'}:{})}
                            >
                                {value[0]}
                            </BtnLink>)
                    }
                </BoxMovePage>
                <ShowBox>
                    <p>
                    <ShowMsg>
                        {msg}
                    </ShowMsg>
                    </p>
                    {children}
                </ShowBox>
            </Grid>
        </Grid>
    </Container>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default GridProfile;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //