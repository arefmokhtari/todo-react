
import React, { useState } from 'react';
import Card from '../ProductCard/ProductCard';
import RenderCM from '../hoc/RenderCM';
import './Products.css';

const Products = () => {
    return <p>hi</p> // <Card />;
}


export default RenderCM(Products, {className: 'products'});