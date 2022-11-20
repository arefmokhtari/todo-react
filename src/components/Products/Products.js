
import React, { useEffect, useState, useContext } from 'react';
import Api from '../../api/api';
import Card from '../ProductCard/ProductCard';
import RenderCM from '../hoc/RenderCM';
import DynCM from '../hoc/DynCM';
import load from '../../context/LoadingPage';
import './Products.css';

const end = 6;
const delay = 500;

const Products = () => {
    const [product, setProduct] = useState([]);
    const [start, setStart] = useState(0);
    const [error, setError] = useState({
        error: false,
        errorObj: null,
    });
    const Load = useContext(load);
    useEffect(() => {
        Api.api.get(Api.POSTS)
            .then(response => {
                if(response.ok)
                    return response.data;
                else throw new Api.MyConnectionError();
            })
            .catch(error => {
                Load.toast(error.message);
                setError({ error: true, errorObj: error });
            })
            .then(data => setProduct(data))
            .finally(() => setTimeout(()=> Load.setLoading(false), delay));
    }, []);
    const startAtHandler = (num) => {
        let size = start + (end * num);
        size = size >= 0 ? size : 0;
        if(size < 100)
            setStart(size);
    }
    return !Load.loading?!error.error?(
        <>
            {product.slice(start, start + end).map(data => <Card key={data.id} title={data.title} body={data.body} />)}
            <DynCM className='products-btns' Cm={prop => <span {...prop}/>}>
                <button onClick={startAtHandler.bind(null, -1)}>«</button>
                <button onClick={startAtHandler.bind(null, +1)}>»</button>
            </DynCM>
        </>
    ):<error.errorObj.Element />:null;
}


export default RenderCM(Products, {className: 'products'});