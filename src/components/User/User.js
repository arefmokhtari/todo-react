
import React from 'react';
import './User.css';
import { enDate2FaDate } from '../../utils/plugins';

const User = ({id, name, email, address, created_at, updated_at, click}) =>(
     <div className='user-class' onClick={() => click(id)}>
        <h3>نام : {name}</h3>
        <h5>ایمیل : {email}</h5>
        <p>آدرس : {address}</p>
        <p>ساخته شده : {enDate2FaDate(created_at)}</p>
        <p>آپدیت : {created_at===updated_at?'اپدیت نشده!': enDate2FaDate(updated_at)}</p>
    </div>
);



export default User;