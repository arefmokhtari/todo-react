// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import Navbar from '../Navigation/Navbar/Navbar';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Layout = ({children: childs}) => <>
    <Navbar />
    <main>{childs}</main>
</>;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Layout;