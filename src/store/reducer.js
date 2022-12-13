// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { configureStore } from '@reduxjs/toolkit';
import * as AT from './action';
import * as pl from '../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const pics = [
    'img/red.png',
    'img/blue.png',
    'img/gray.png',
    'img/green.png',
    'img/yellow.png',
]
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const fakeProducts = [
    {id: 1, title: 'test 1', discription: 'test 1', img: pl.random.choice(pics)},
    {id: 2, title: 'test 2', discription: 'test 2', img: pl.random.choice(pics)},
    {id: 3, title: 'test 3', discription: 'test 3', img: pl.random.choice(pics)},
    {id: 4, title: 'test 4', discription: 'test 4', img: pl.random.choice(pics)},
    {id: 5, title: 'test 5', discription: 'test 5', img: pl.random.choice(pics)},
    {id: 6, title: 'test 6', discription: 'test 6', img: pl.random.choice(pics)},
    {id: 7, title: 'test 7', discription: 'test 7', img: pl.random.choice(pics)},
    {id: 8, title: 'test 8', discription: 'test 8', img: pl.random.choice(pics)},
    {id: 9, title: 'test 9', discription: 'test 9', img: pl.random.choice(pics)},
    {id: 10, title: 'test 10', discription: 'test 10', img: pl.random.choice(pics)},
]
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const config = {
    products: [
        ... fakeProducts
    ]
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const reducer = (state = config, action) => {
    const { products, ... kwargs } = state;
    switch(action.type){
        case AT.ADD:
            return {
                ... kwargs,
                products: products.concat({ id: pl.getNewId(products), ... action.product }),
            }
        case AT.REMOVEBYIDS:
            return {
                ... kwargs,
                products: products.filter(product => action.ids.indexOf(product.id) === -1),
            }
        case AT.REMOVEBYID:
                return {
                    ... kwargs,
                    products: products.filter(product => product.id != action.id),
                }
        case AT.UPDATEPRODUCTBYID:
            return {
                ... kwargs,
                products: products.map(product => product.id == action.id?{id: action.id, ... action.product}:product),
            }
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const store = configureStore({
    reducer: reducer,
})
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //