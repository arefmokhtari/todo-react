// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import InputForm from '../../components/InputForm/InputForm';
import Button from '../../components/UI/Button/Button';
import { useLoading } from '../../hooks/useLoading';
import { productValidate } from '../../validate/yupvalidate';
import * as Func from '../../store/func';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { pics } from '../../store/reducer';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddProduct = () => {
    useLoading();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const submitProductHandler = values => {
        dispatch(Func.addProduct(values));
        toast.success('done !');
        navigate('/');
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            discription: '',
            img: '',
        },
        validationSchema: productValidate,
        onSubmit: submitProductHandler,
    });

    return (
        <>
            <h1>add product</h1>
            <form onSubmit={formik.handleSubmit} className='myform mycard'>
                <InputForm 
                    config={formik.getFieldProps}
                    touched={formik.touched}
                    isSubmitting={formik.isSubmitting}
                    errors={formik.errors}
                />
                <select name="img" onChange={formik.handleChange}>
                    {pics.map((v, i) => <option key={i} selected={formik.values.img==v?true:false} value={v}>{v}</option>)}
                </select>
                <Button className='button-submit' type='submit'>add product</Button>
            </form>
        </>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddProduct;