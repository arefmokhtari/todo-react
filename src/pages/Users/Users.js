
import React, { useContext, useEffect, useState } from 'react';
import { getUsers as getUsersRequest } from '../../api/requests';
import User from '../../components/User/User';
import { toast } from 'react-toastify';
import { Load } from '../../context/contexts';
import { useNavigate } from 'react-router-dom';

const tempMove = 10;

const Users = () => {
    const [users, setUsers] = useState({});
    const navigate = useNavigate();
    const load = useContext(Load);
    useEffect(() => {
        (async () => {
        load(true);
        let request = await getUsersRequest();
        if(request.ok)
            setUsers(request.data);
        else 
            toast.error('درخواست به سرویس امکان پذیر نبود!');
        load(false);
        
        })();
    }, []);

    const move2EditUser = id => {
        navigate(`/edit-user/${id}`);
    }

    return users.date? users.date.map(values => <User key={values.id} click={move2EditUser} {... values}/>):null;
};


export default Users;