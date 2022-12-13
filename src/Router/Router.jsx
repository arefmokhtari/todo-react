// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products/Products';
import EditProduct from '../pages/EditProduct/EditProduct';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Router = () => (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='*' element={<h1>یافت نشد</h1>} />
    </Routes>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Router;