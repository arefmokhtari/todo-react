
import { create } from 'apisauce';


const url = 'https://jsonplaceholder.typicode.com';

export const api = create({
    baseURL: url,
});

