
import React, { useEffect, useState } from 'react';
import { getUsers as getUsersRequest } from '../../api/requests';
import User from '../../components/User/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const tempMove = 10;

const Users = () => {
    const [users, setUsers] = useState({});
    const [skip, setSkip] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            
        let response = await getUsersRequest(skip, skip+tempMove);
        if(response.ok)
            setUsers(response.data);
        else 
            toast.error('درخواست به سرویس امکان پذیر نبود!');
        
        console.log('user');

        })();
    }, []);

    const move2EditUser = id => {
        navigate(`/edit-user/${id}`);
    }

    return users.date? users.date.map(values => <User key={values.id} click={move2EditUser} {... values}/>):null;
};


export default Users;