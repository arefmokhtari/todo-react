
import React from 'react';
import Products from '../../components/Products/Products';
import RenderCM from '../../components/hoc/RenderCM';

const Product = () => (
    <>
        <h4>products</h4>
        <Products />
    </>
);

export default RenderCM(Product, {style: {textAlign: 'center'}});