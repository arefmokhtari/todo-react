// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import UserContext from './contexts/UserContext';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import Loading  from './components/UI/Loading/Loading';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const App = () => (
    <BrowserRouter>
        <UserContext>
            <ToastContainer  position="top-center" />
            <Loading>
            <Router />
            </Loading>
        </UserContext>
    </BrowserRouter>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default App;