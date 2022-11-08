
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MenuFrom from '../MenuForm/MenuForm';
import './DuplicateForm.css';

const DuplicateForm = () => {
    const [showing, setShowing] = useState(false);
    const [value, setValue] = useState('');
    const formik = useFormik({
        initialValues: {
            nums: '',
        },
        onSubmit: ({nums}) => {
            if(nums.trim()){
                setValue(nums.trim());
                setShowing(true);
            }
        },
        validationSchema: Yup.object({
            nums: Yup.number().typeError('only numbers !').required('input is empty !')
        }),
    });

    return <form onSubmit={formik.handleSubmit} className='duplicate-form'>
        <input type='text' placeholder='nums' {... formik.getFieldProps('nums')}/>
        {formik.errors.nums && <span style={{color: 'red'}}>{formik.errors.nums}</span>}
        <button type='submit'>check</button>
        {showing && formik.isSubmitting && formik.values.nums && <MenuFrom showing={showing} value={value} hide={setShowing} />}
    </form>;
}


export default DuplicateForm;

