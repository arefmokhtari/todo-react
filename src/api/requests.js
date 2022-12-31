
import api from './config';


//      user


export const getInfo = () => api.get('user/getInfo');


export const signUp = ({ name, email, password }) => api.post('user/signUp', { name, email, password });


export const updateUserById = (id, { name, email, password }) => api.post(`user/update/${id}`, { name, email, password });


export const login = ({ email, password }) => api.post('user/login', { email, password });


//