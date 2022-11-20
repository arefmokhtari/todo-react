

import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ProductPage from './pages/ProductPage/ProductPage';
import Loading from './components/Loading/Loading';
import Load from './context/LoadingPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    
    return (<>
        {loading && <Loading />}
        <Layout>
            <ToastContainer  position="top-center" />
            <Load.Provider value={{loading: loading, setLoading:setLoading,toast:toast}}>
                <ProductPage />
            </Load.Provider>
        </Layout>
    </>);
}


export default App;