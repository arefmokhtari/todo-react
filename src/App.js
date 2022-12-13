// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import Loading  from './components/UI/Loading/Loading';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import Layout from './components/Layout/Layout';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <ToastContainer  position="top-center" />
            <Layout>
                <Loading>
                    <Router />
                </Loading>
            </Layout>
        </Provider>
    </BrowserRouter>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default App;