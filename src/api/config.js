// - - - - - - - - - - - - - - //
import { create } from 'apisauce';
// - - - - - - - - - - - - - - //

const url = 'http://localhost:8000/api';

// - - - - - - - - - - - - - - //

const api = create({
    baseURL: url,
});

// - - - - - - - - - - - - - - //
export default api;
// - - - - - - - - - - - - - - //