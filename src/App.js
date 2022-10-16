

import React, { useState } from 'react';
import MyDiv from './component/MyDiv/MyDiv';
import './App.css';

const App = () => {
    const [myState, setState] = useState({
        data: [
            {id: 1, name: 'aref', lastname: 'mokhtari', text: 'text 1'},
            {id: 2, name: 'ali', lastname: 'nothin', text: 'text 2'},
            {id: 3, name: 'milad', lastname: 'nothin', text: 'text 3'}
        ]
    });
    const myBtnHandler = () => setState({data: myState.data.sort(() => Math.random() - 0.5)});

    return <div>
        <button className='my-button' onClick={myBtnHandler}>change</button>
       {myState.data.map((value) => <MyDiv key={value.id} name={value.name} lastname={value.lastname}>{value.text}</MyDiv>)}
    </div>;
}

export default App;