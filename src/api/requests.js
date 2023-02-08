// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import api,{ headerFromData } from './config';
import { checkDataNotEmpty, objectToFormData } from '../utils/plugins';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const setToken = token => api.addAsyncRequestTransform(request => async () => {
    request.headers["Authorization"] = "Bearer " + token;
});

//      admin

export const adminLogin = ({ name, password }) => api.post('admin/login', { name, password });

//      category

export const addCategory = values => api.post('admin/category/store', checkDataNotEmpty(values));

export const getCategories = url => api.get(`admin/category/get${url}`);

export const getCagegoryById = id => api.get(`admin/category/getById/${id}`);

export const updateCategoryById = (id, values) => api.post(`admin/category/updateById/${id}`, values);

//      users
export const getUsers = (url = '') => api.get(`adminUser/get_users${url}`);

export const getUserById = id => api.get(`adminUser/getById/${id}`);

export const updateUserById = (id,values) => api.post(`adminUser/updateById/${id}`, values);

//      news
export const addNews = (news) => api.post('admin/news/store', objectToFormData(news), { headers: headerFromData });

export const getNewsById = id => api.get(`admin/news/getById/${id}`);

export const updateNewsById = (id, news) => api.post(`admin/news/updateById/${id}`, objectToFormData(news), { headers: headerFromData })

export const getNews = (url = '') => api.get(`news/get${url}`);

// product
export const addProduct = product => api.post('admin/product/store', objectToFormData(product), { headers: headerFromData });

export const getProductById = id => api.get(`admin/product/getById/${id}`);

export const updateProductById = (id, product) => api.post(`admin/product/updateById/${id}`, objectToFormData(product), { headers: headerFromData });

export const deleteProductById = id => api.delete(`admin/product/deleteById/${id}`);

export const getProducts = (url = '') => api.get(`admin/product/get${url}`);

// address & wallet

export const getAddress = (url = '') => api.get(`admin/address/get${url}`);

export const getWallet = (url = '') => api.get(`admin/wallet_history/get${url}`);

export const storeWallet = wallet => api.post('admin/wallet_history/store', wallet);

// AboutUs
export const getAboutUs = () => api.get('about_us/get');

export const updateAboutUs = aboutUs => api.post('admin/about_us/update', objectToFormData(aboutUs), { headers: headerFromData });

// contect us
export const getContectUs = (url = '') => api.get(`admin/contact_us/get${url}`);

export const getContectById = id => api.get(`admin/contact_us/getById/${id}`);

export const getContectUsContect = (url = '') => api.get(`contact_us_content/get${url}`);

export const updateContectUsContect = contect => api.post('admin/contact_us_content/update', contect);


// discount code

export const getDiscountCode = (url = '') => api.get(`admin/discount_code/get/${url}`);

export const deleteDiscountCode = id => api.delete(`admin/discount_code/deleteById/${id}`);

export const addDiscountCode = code => api.post('admin/discount_code/store', code);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //