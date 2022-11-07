

import React from 'react';
import ProductBuilder from './ProductBuilder/ProductBuilder';
import './ProductControl.css';
import DynCM from '../../hoc/DynCM';
const ProductControl = props => {
    const red = props.title === 'laptop'?255:0;
    return <DynCM className='product-control' style={{boxShadow: `0 0 6px 1px rgba(${red}, 0, ${red || 255}, 0.5)`,}}>
        <ProductBuilder {... props}/>
    </DynCM>;
}

export default ProductControl;
