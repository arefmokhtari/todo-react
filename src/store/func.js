// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import * as AT from './action';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const deleteProductsByIds = ids => {
    return {
        type: AT.REMOVEBYIDS,
        ids: ids
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //