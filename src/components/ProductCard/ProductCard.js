
import React from 'react';
import RenderCM from '../hoc/RenderCM';
import './ProductCard.css';

const ProductCard = ({ title, body }) => (
    <>
        <h3>{title || 'title'}</h3>
        <p>{body || 'body'}</p>
    </>
);
export default RenderCM(ProductCard, {className: 'product-show'});