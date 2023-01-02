// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import api from './config';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

//      user    -       Login && Sign Up

export const getInfo = () => api.get('user/getInfo');


export const signUp = ({ name, email, password }) => api.post('user/signUp', { name, email, password });


export const updateUserById = (id, { name, email, password }) => api.post(`user/update/${id}`, { name, email, password });


export const login = ({ email, password }) => api.post('user/login', { email, password });


//      user    -       Address

export const getAllAddress = () => api.get('address/getAll');

export const getByIdAddress = (id) => api.get(`address/getById/${id}`);

export const storeAddress = ({ description, province, city }) => api.post('address/store', { description, province, city });

export const updateAddresById = (id, address) => api.post(`address/updateById/${id}`, address);

export const deleteAddresById = (id) => api.delete(`address/deleteById/${id}`);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //