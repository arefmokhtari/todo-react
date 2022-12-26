// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Route, Routes } from 'react-router';
import Index from '../pages/Index/Index';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import SignUp from '../pages/SignUp/SignUp';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>
        <Route path='/' element={<Index />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;