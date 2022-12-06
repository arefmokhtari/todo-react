// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index/Index';
import SignIn from '../pages/SignIn/SignIn';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<h3>not found !</h3>}/>
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;