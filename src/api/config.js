// - - - - - - - - - - - - - - //
import { create } from 'apisauce';
// - - - - - - - - - - - - - - //

export const url = 'http://127.0.0.1:8000';

// - - - - - - - - - - - - - - //

const api = create({
    baseURL: url + '/api',
});

// - - - - - - - - - - - - - - //

export const headerFromData = {
    'Content-Type': 'multipart/form-data',
}

// - - - - - - - - - - - - - - //
export default api;
// - - - - - - - - - - - - - - //