
import React from 'react';


const Layout = ({ children, ... kwargs }) => <main {... kwargs}>{children}</main>;

export default Layout;