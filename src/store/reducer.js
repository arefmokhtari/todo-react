// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { configureStore } from '@reduxjs/toolkit';
import * as AT from './action';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const fakeProducts = [
    {id: 1, title: 'test 1', discription: 'test 1'},
    {id: 2, title: 'test 2', discription: 'test 2'},
    {id: 3, title: 'test 3', discription: 'test 3'},
    {id: 4, title: 'test 4', discription: 'test 4'},
    {id: 5, title: 'test 5', discription: 'test 5'},
    {id: 6, title: 'test 6', discription: 'test 6'},
    {id: 7, title: 'test 7', discription: 'test 7'},
    {id: 8, title: 'test 8', discription: 'test 8'},
    {id: 9, title: 'test 9', discription: 'test 9'},
    {id: 10, title: 'test 10', discription: 'test 10'},
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
                products: products.concat({ id: products.length + 1, ... action.product }),
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
                products: products.map(product => product.id === action.id?{id: action.id, ... action.product}:product),
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