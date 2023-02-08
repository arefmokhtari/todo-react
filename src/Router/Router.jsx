// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Route, Routes, Outlet } from 'react-router';
import Index from '../pages/Index/Index';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import LayoutMain from '../components/Navigation/Navigation';
import Users from '../pages/Users/Users';
import Categories from '../pages/Categories/Categories';
import AddCategories from '../pages/Categories/AddCategories/AddCategories';
import EditCategories from '../pages/Categories/EditCategories/EditCategories';
import EditUser from '../pages/Users/EditUser/EditUser';
import Products from '../pages/Products/Products';
import AddProduct from '../pages/Products/AddProduct/AddProduct';
import News from '../pages/News/News';
import AddNews from '../pages/News/AddNews/AddNews';
import EditNews from '../pages/News/EditNews/EditNews';
import EditProduct from '../pages/Products/EditProduct/EditProduct';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContectUs from '../pages/ContectUs/ContectUs';
import DiscountCode from '../pages/DiscountCode/DiscountCode';
import AddDiscountCode from '../pages/DiscountCode/AddDiscountCode/AddDiscountCode';
import UserAddress from '../pages/Users/UserAddress/UserAddress';
import UserWallet from '../pages/Users/UserWallet/UserWallet';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>
        <Route element={(
            <LayoutMain>
                <Outlet />
            </LayoutMain>
        )}>
            <Route path='/' element={<Index />} />
            
            <Route path='users' element={<Users />} />
            <Route path='users/edit/:id' element={<EditUser />} />
            <Route path='users/wallet/:id' element={<UserWallet />} />
            <Route path='users/address/:id' element={<UserAddress />} />

            <Route path='categories' element={<Categories />} />
            <Route path='categories/add' element={<AddCategories />} />
            <Route path='categories/edit/:id' element={<EditCategories />} />

            <Route path='products' element={<Products />} />
            <Route path='products/add' element={<AddProduct />} />
            <Route path='products/edit/:id' element={<EditProduct />} />

            <Route path='news' element={<News />} />
            <Route path='news/add' element={<AddNews />} />
            <Route path='news/edit/:id' element={<EditNews />} />

            <Route path='about-us' element={<AboutUs />} />

            <Route path='contect-us' element={<ContectUs />} />

            <Route path='discount-code' element={<DiscountCode />} />

            <Route path='discount-code/add' element={<AddDiscountCode />} />
        </Route>
        
        <Route path='login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //