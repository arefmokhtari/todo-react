
import React from 'react';
import Products from '../../components/Products/Products';
import RenderCM from '../../components/hoc/RenderCM';
import './ProductPage.css';

const ProductPage = () => (
    <>
        <h2>products</h2>
        <Products />
    </>
);

export default RenderCM(ProductPage, {className: 'product-page'},  prop => <span {...prop} />);