

import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ProductPage from './pages/ProductPage/ProductPage';
import Loading from './components/Loading/Loading';
import Load from './context/LoadingPage';

const App = () => {
    const [loading, setLoading] = useState(true);
    
    return (<>
        {loading && <Loading />}
        <Layout>        
            <Load.Provider value={{loading: loading, setLoading:setLoading}}>
                <ProductPage />
            </Load.Provider>
        </Layout>
    </>);
}


export default App;