// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import api from './config';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const setToken = token => api.addAsyncRequestTransform(request => async () => 
    request.headers["Authorization"] = "Bearer " + token
);

//      user    -       Login && Sign Up

export const getUserInfo = () => api.get('user/getInfo');


export const signUp = ({ name, email, password }) => api.post('user/signUp', { name, email, password });


export const updateUser = (values) => api.post('user/update', values);


export const login = ({ email, password }) => api.post('user/login', { email, password });

//      user    -       forget passwd

export const sendCode = email => api.post('user/send_code', { email });

export const checkOtp = (email, otp) => api.post('user/check_otp', { email, otp });

export const changePasswd = ({current_password, new_password}) => api.post('user/change_password', { current_password, new_password  });

export const confirmPass = (newPass) => api.post('user/change_password', { new_password: newPass });

//      user    -       Address

export const getAllAddress = () => api.get('address/getAll');

export const getByIdAddress = (id) => api.get(`address/getById/${id}`);

export const storeAddress = ({ description, province, city }) => api.post('address/store', { description, province, city });

export const updateAddresById = (id, { description, province, city }) => api.post(`address/updateById/${id}`, { description, province, city });

export const deleteAddresById = (id) => api.delete(`address/deleteById/${id}`);

//     ( About & Contect ) Us

export const getAboutUs = () => api.get('about_us/get');

export const contactUsContent = () => api.get('contact_us_content/get');

export const storeContactUs = store => api.post('contact_us/store', store);

//     news

export const getNews = (url = '') => api.get(`news/get${url}`);

export const getNewsById = id => api.get(`admin/news/getById/${id}`);


//     products

export const getProducts = (url = '') => api.get(`admin/product/get${url}`);

export const getByIdProducts = id => api.get(`admin/product/getById/${id}`);


//     categories 

export const getCategories = (url = '') => api.get(`admin/category/get${url}`); 

export const getByIdCategory = id => api.get(`admin/category/getById/${id}`);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //