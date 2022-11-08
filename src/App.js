
import React from 'react';
import Layout from './components/Layout/Layout';
import Products from './container/Products/Products';
import Duplicate from './container/Duplicate/Duplicate';
import './App.css';

const App = () => {
    return <Layout>
        <Duplicate />
        <Products />
    </Layout>;
}

export default App;