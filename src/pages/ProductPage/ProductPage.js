
import React from 'react';
import Products from '../../components/Products/Products';
import RenderCM from '../../components/hoc/RenderCM';

const ProductPage = () => (
    <>
        <h2>products</h2>
        <Products />
    </>
);

export default RenderCM(ProductPage, {style: {textAlign: 'center'}},  prop => <span {...prop} />);