
import React from 'react';
import { useFormik } from 'formik';
import MenuFrom from '../MenuForm/MenuForm';
import './DuplicateForm.css';
let c = 0;
const DuplicateForm = () => {
    const [showing, setShowing] = React.useState(false);
    const [value, setValue] = React.useState('');
    const formik = useFormik({
        initialValues: {
            nums: '',
            sub: '',
        },
        onSubmit: ({nums}) => {
            if(nums.trim()){
                setValue(nums);
                setShowing(true);
                console.log(c++);
            }
        },
    });

    return <form onSubmit={formik.handleSubmit} className='duplicate-form'>
        <input type='text' placeholder='nums' {... formik.getFieldProps('nums')}/>
        <button type='submit'>check</button>
        {showing && formik.isSubmitting && formik.values.nums && <MenuFrom value={value} hide={setShowing} />}
    </form>;
}


export default DuplicateForm;

