import { mainApi } from './config';


export const getUserById = id => mainApi.get(`api/user/${id}`);

export const updateUserById = (id, user) => mainApi.post(`/api/user/${id}?_method=put`, user);

export const addUser = (user) => mainApi.post('api/user', user);

export const getUsers = (skip, limit) => mainApi.get('api/user'+(skip && limit?`?skip=${skip}&limit=${limit}`:''));

export const deleteUserById = id => mainApi.delete(`api/user/${id}`);
