
import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const EditUser = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    const move2UserHandler = () => {
        navigate('/users');
    }

    return <button onClick={move2UserHandler}>click</button>;
}


export default EditUser;