// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as AT from './action';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const deleteProductsByIds = ids => ({
    type: AT.REMOVEBYIDS,
    ids: ids,
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const updateProductById = (id, newProduct) => ({
    type: AT.UPDATEPRODUCTBYID,
    id: id,
    product: newProduct,
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const addProduct = product => ({
    type: AT.ADD,
    product: product,
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
