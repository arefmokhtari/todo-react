
import api from './config';


//      user


export const getInfo = () => api.get('api/user/getInfo');


export const signUp = ({ name, email, password }) => api.post('api/user/signUp', { name, email, password });


export const updateUserById = (id, { name, email, password }) => api.post(`api/user/update/${id}`, { name, email, password });


export const login = ({ email, password }) => api.post('api/user/login', { email, password });


//