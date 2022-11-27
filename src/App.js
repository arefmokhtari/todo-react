
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import AddUser from './pages/AddUser/AddUser';
import EditUser from './pages/EditUser/EditUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';                         
import './App.css';

const App = () => <>
    <Router>
        <Layout>
            <ToastContainer  position="top-center" />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Navigate replace to='/' />} />
                <Route path='/users' element={<Users />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='edit-user'>
                    <Route path=':id' element={<EditUser />}/>
                </Route>
            </Routes>
        </Layout>
    </Router>
</>;


export default App;