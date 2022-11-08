
import React, { useState } from 'react';
import { useFormik } from 'formik';
import MenuFrom from '../MenuForm/MenuForm';
import './DuplicateForm.css';

const DuplicateForm = () => {
    const [showing, setShowing] = useState(false);
    const [value, setValue] = useState('');
    const formik = useFormik({
        initialValues: {
            nums: '',
            sub: '',
        },
        onSubmit: ({nums}) => {
            if(nums.trim()){
                setValue(nums.trim());
                setShowing(true);
            }
        },
    });

    return <form onSubmit={formik.handleSubmit} className='duplicate-form'>
        <input type='text' placeholder='nums' {... formik.getFieldProps('nums')}/>
        <button type='submit'>check</button>
        {showing && formik.isSubmitting && formik.values.nums && <MenuFrom showing={showing} value={value} hide={setShowing} />}
    </form>;
}


export default DuplicateForm;

