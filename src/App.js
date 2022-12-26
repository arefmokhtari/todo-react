// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import RTL from './styles/mui-config';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
import LoadingProvider from './components/UI/Loading/LoadingProvider/LoadingProvider';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //



const App = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <RTL>
                    <Login />
                </RTL>
            </LoadingProvider>
        </ThemeProvider>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default App;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //