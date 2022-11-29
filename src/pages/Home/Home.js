
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React, { useContext, useEffect } from 'react';
import { Load } from '../../context/contexts';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


const Home = () => {
    const load = useContext(Load);
    useEffect(() => {
        load(true);
        setTimeout(()=> load(false), 500);
    },[]);
    return <h1>home</h1>;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default Home;