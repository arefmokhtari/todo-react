// - - - - - - - - - - - - - - //
import { create } from 'apisauce';
// - - - - - - - - - - - - - - //

export const url = 'http://127.0.0.1:8000';

// - - - - - - - - - - - - - - //

const api = create({
    baseURL: url + '/api',
});

// - - - - - - - - - - - - - - //
export default api;
// - - - - - - - - - - - - - - //