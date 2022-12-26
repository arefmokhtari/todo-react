// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React from 'react';
import RTL from './styles/mui-config';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
import LoadingProvider from './components/UI/Loading/LoadingProvider/LoadingProvider';
import { BrowserRouter as BrRouter } from 'react-router-dom';
import Router from './Router/Router';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const App = () => {
    
    return (
        <BrRouter>
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <RTL>
                    <Router />
                </RTL>
            </LoadingProvider>
        </ThemeProvider>
        </BrRouter>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default App;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //