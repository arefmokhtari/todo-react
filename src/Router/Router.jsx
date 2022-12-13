// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products/Products';
import EditProduct from '../pages/EditProduct/EditProduct';
import AddProduct from '../pages/AddProduct/AddProduct';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='*' element={<h1>not found !</h1>} />
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;