import { mainApi } from './config';

export const addUser = (user = {name: '', email: '', password: '', address: ''}) => mcinApi.post('api/user', user);



