// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useLoading } from '../../hooks/useLoading';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product/Product';
import Card from '../../components/UI/Card/Card';
import './Products.css';
import Button from '../../components/UI/Button/Button';
import { useEffect } from 'react';
import * as Func from '../../store/func';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
let selected = [];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Products = () => {
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();
    useEffect(() => {
        selected = [];
        return () => selected = [];
    },[]);
    const selectedHandler = (event, id) => {
        event.target.checked?selected.push(id):selected.splice(selected.indexOf(id), 1);
        console.log(selected);
    }
    useLoading();
    console.log(selected); 
    return (
        <>
        <h1>products</h1>
        <Card width='80%' className='products-card'>
            {products.map(pr => <Product key={pr.id} selected={selectedHandler} product={pr}/>)}
        </Card>
        <Button style={{width: '140px', fontSize: '14px'}} onClick={() => {dispatch(Func.deleteProductsByIds(selected));selected=[];}}>remove selected</Button>
        </>
    );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Products;