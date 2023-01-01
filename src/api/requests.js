
import api from './config';


//      admin


export const adminLogin = ({ name, password }) => api.post('admin/login', { name, password });