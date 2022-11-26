
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import AddUser from './pages/AddUser/AddUser';
import './App.css';

const App = () => <>
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/add-user' element={<AddUser />} />
            </Routes>
        </Layout>
    </Router>
</>;


export default App;