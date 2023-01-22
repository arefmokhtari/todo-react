// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import RTL from '../../styles/mui-config';
import LoadingProvider from '../UI/Loading/LoadingProvider/LoadingProvider';
import { BrowserRouter as BrRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmProvider from '../UI/Confirm/ConfirmProvider/ConfirmProvider';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Layout = ({ children: child }) => (
    <BrRouter>
            <ThemeProvider theme={theme}>
            <ToastContainer position="top-center" toastStyle={{textAlign: 'right'}} />
                <LoadingProvider>
                    <RTL>
                        <ConfirmProvider>
                            {child}
                        </ConfirmProvider>
                    </RTL>
                </LoadingProvider>
            </ThemeProvider>
    </BrRouter>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Layout;