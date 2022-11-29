// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import AddUser from './pages/AddUser/AddUser';
import EditUser from './pages/EditUser/EditUser';
import Loading from './components/UI/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { Load } from './context/contexts';
import 'react-toastify/dist/ReactToastify.css';                         
import './App.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const App = () => {
    const [loading, setLoading] = useState(false);
    return <Router>
        <Layout>
            <Load.Provider value={setLoading}>
            {loading && <Loading />}
            <ToastContainer  position="top-center" />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Navigate replace to='/' />} />
                <Route path='/users' element={<Users />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/edit-user/:id' element={<EditUser />} />
                <Route path='*' element={<h1>نتیجه یافت نشد</h1>} /> 
            </Routes>
            </Load.Provider>
        </Layout>
    </Router>;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default App;