
import React, { useState, useEffect } from 'react';
import Controls from '../../components/ProductControl/ProductControl';
import './Products.css';
import RenderCM from '../../hoc/RenderCM';
import { getProducts } from '../../utils/plugins';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(setProduct.bind(this, getProducts()), []);

    return <>
    <h3>Products:</h3>
    {product.map(({id, ... kwargs}) => <Controls key={id} {... kwargs}/>)}
    </>;
}

export default RenderCM(Products, {className: 'containers product-app'});