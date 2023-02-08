// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useEffect, useState } from 'react';
import { addProduct, getCategories } from '../../../api/requests';
import { useRequest, requestName } from '../../../hooks/request-hook';
import { useFormik } from 'formik';
import { addProductValidate } from '../../../validates/productValidate';
import InputProduct from '../../../components/InputProduct/InputProduct';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddProduct = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async ({category_id,...values}, { resetForm }) => await request.requestByLoadingAndToken({
        request: addProduct,
        args: [values],
        success: _ => resetForm(),
        showMessage: true,
    });
    // - - - - - - - - - - - - //
    const [categories, setCategories] = useState({categories: [], categories_selected: 0});
    const [subcategory, setSubCategory] = useState([]);
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getCategories,
            args: ['?is_main=1'],
            success: req => setCategories({categories: req.data.data.data, categories_selected: 0}),
        }],
    });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image_1: null,
            image_2: null,
            image_3: null,
            show_in_home_page: '0',
            category_id: '',
            subcategory_id: '',
            price: '',
            stock: '',
            features: '',
            discount_percent: '',
        },
        validationSchema: addProductValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    useEffect(() => {
        if(formik.values.category_id && formik.values.category_id != categories.categories_selected) {
            (async () => await request.requestByToken({
                request: getCategories,
                args: [`?parent_id=${formik.values.category_id}`],
                success: req => {
                    setSubCategory(req.data.data.data);
                    formik.setFieldValue('subcategory_id', '');
                },
            }))();
            setCategories(preState => ({... preState, categories_selected: formik.values.category_id}));
        }
    }, [formik.values.category_id]);
    // - - - - - - - - - - - - //
    return (
        <InputProduct 
            formik={formik}
            categories={categories}
            subcategory={subcategory}
            title='افزودن محصول'
            btnText='افزودن'
        />
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddProduct;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //