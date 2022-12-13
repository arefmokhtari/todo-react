// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Navbar from '../Navigation/Navbar/Navbar';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Layout = ({children: child}) => (
    <>
        <Navbar />
        <main>{child}</main>
    </>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Layout;