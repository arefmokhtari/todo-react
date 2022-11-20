
import React from 'react';
import { create } from 'apisauce';


const url = 'https://jsonplaceholder.typicode.com';

export const api = create({
    baseURL: url,
});

const errorMessage = 'cannot response to api !';

export class MyConnectionError extends Error {
    constructor(message){
        super(message || errorMessage);
    }
    Element = () => <p style={{color: 'red', fontSize: '25px'}}>{this.message}</p>;
}

export const POSTS = '/posts';

export default {
    api,
    MyConnectionError,
    POSTS,
}