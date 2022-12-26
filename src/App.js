// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import RTL from './styles/mui-config';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //



const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <RTL>
                <Login />
            </RTL>
        </ThemeProvider>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default App;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //