// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Route, Routes, Outlet } from 'react-router';
import Index from '../pages/Index/Index';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import SignUp from '../pages/SignUp/SignUp';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import Address from '../pages/Profile/Address/Address';
import Navbar from '../components/Navigation/Navbar/Navbar';
import AddAddress from '../pages/Profile/Address/AddAddress/AddAddress';
import EditAddress from '../pages/Profile/Address/EditAddress/EditAddress';
import Wallet from '../pages/Profile/Wallet/Wallet';
import User from '../pages/Profile/User';
import EditUser from '../pages/Profile/EditUser/EditUser';
import ChangePasswd from '../pages/ChangePasswd/ChangePasswd';
import Footer from '../components/Footer/Footer';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import { Typography } from '@mui/material';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>

        <Route element={<>
            <Navbar />
                <Typography component='main' sx={{minHeight: '500px'}}>
                    <Outlet />
                </Typography>
            <Footer />
        </>}>
            <Route path='/' element={<Index />} />
            
            <Route path='/about-us' element={<AboutUs />} />

            <Route path='/contact-us' element={<ContactUs />} />

            <Route path='profile/address' element={<Address />}/>
            <Route path='profile/address/add' element={<AddAddress />} />
            <Route path='profile/address/edit/:id' element={<EditAddress />} />

            <Route path='profile/wallet' element={<Wallet />} />
            <Route path='profile/show' element={<User />} />
            <Route path='profile/edit' element={<EditUser />} />
        </Route>
        

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forget-passwd' element={<ForgetPass />} />
        <Route path='change-passwd' element={<ChangePasswd />} />
        <Route path='*' element={<NotFound />} />
        
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;