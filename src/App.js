

import React from 'react';
import Parent from './components/Parent/Parent';
import Header from './components/Header/Header';

const App = () => (
    <Parent style={{background: 'aqua', textAlign: 'center'}}>
        <Header title={'ptag'}/>
    </Parent>
);


export default App;