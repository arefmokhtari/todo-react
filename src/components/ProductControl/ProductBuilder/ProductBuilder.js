
import React from 'react';
import './ProductBuilder.css';
import RenderCM from '../../../hoc/RenderCM';
const ProductBuilder = ({title, content}) => {
    return <>
        <p>title : {title}</p>
        <p>content : {content}</p>
    </>;
}

export default RenderCM(ProductBuilder, {className: 'product-builder'});