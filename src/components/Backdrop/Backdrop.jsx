// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import './Backdrop.css';
import { useEffect } from 'react';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const Backdrop = ({}) => {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => document.body.classList.remove('no-scroll');
    },[]);
    return <div className='backdrop-class' />;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Backdrop;