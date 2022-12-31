// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Grid, Container } from '@mui/material';
import { GridTop, Grid4Login, DivS, DivLogin, LogBtn } from './Login.style';
import InputFromLogin from '../../components/InputFromLogin/InputFromLogin';
import logo from './logo.png';
import PasswdIcon from '../../components/UI/ICONS/PasswdIcon/PasswdIcon';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Login = () => {
    return (
        <Container maxWidth="lg"  direction='column' >
            <Grid container>
                <GridTop xs={12} sx={{display: 'flex'}} item  alignItems="center" >
                    <DivS />
                    <img src={logo} alt="" style={{height: '150px'}} />
                    <DivS />
                </GridTop>
                <Grid4Login xs={12} sx={{textAlign: 'center'}} item>
                    <DivLogin>
                        <h1 style={{color: '#525252', paddingTop: '10px'}}>صفحه ورود پنل</h1>
                        <InputFromLogin 
                        label='یوزنیم'
                        />
                        <InputFromLogin 
                        type='password'
                        label='رمز عبور' 
                        Icon={<PasswdIcon />} 
                    />
                        <LogBtn type='submit' variant='contained'>ورود</LogBtn>
                    </DivLogin>
                </Grid4Login>
            </Grid>
        </Container>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Login;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //