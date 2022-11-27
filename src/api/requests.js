import { mainApi } from './config';





export const addUser = (user = {name: '', email: '', password: '', address: ''}) => mainApi.post('api/user', user);


export const getUsers = (skip = 0, limit = 10) => mainApi.get(`api/user?skip=${skip}&limit=${limit}`);
