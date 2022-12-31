// - - - - - - - - - - - - - - //
import { create } from 'apisauce';
// - - - - - - - - - - - - - - //

const url = 'http://127.0.0.1:8000/api';

// - - - - - - - - - - - - - - //

const api = create({
    baseURL: url,
});

// - - - - - - - - - - - - - - //
export default api;
// - - - - - - - - - - - - - - //