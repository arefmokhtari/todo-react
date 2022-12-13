// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading';
import Button from '../../components/UI/Button/Button';
import './EditProduct.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { productValidate } from '../../validate/yupvalidate';
import InputForm from '../../components/InputForm/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Func from '../../store/func';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditProduct = () => {
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const submitProductHandler = values => {
        dispatch(Func.updateProductById(id, values));
        toast.success('done !');
        navigate('/');
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            discription: '',
        },
        validationSchema: productValidate,
        onSubmit: submitProductHandler,

    });
    useEffect(() => {
        const product = products.find(pr => pr.id == id);
        if(product)
            formik.setValues({title: product.title, discription: product.discription});
    }, []);
    useLoading();

    return <>
        <h1>edit product</h1>
        <Button onClick={() => navigate('/')} className='back-button'>back</Button>
        <form onSubmit={formik.handleSubmit} className='myform mycard'>
            <InputForm 
                config={formik.getFieldProps}
                touched={formik.touched}
                isSubmitting={formik.isSubmitting}
                errors={formik.errors}
            />
            <Button className='button-submit' type='submit'>edit product</Button>
        </form>
    </>
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditProduct;