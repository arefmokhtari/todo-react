// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCategories, getProductById, updateProductById } from '../../../api/requests';
import InputProduct from '../../../components/InputProduct/InputProduct';
import { useRequest, requestName } from '../../../hooks/request-hook';
import { editProductValidate } from '../../../validates/productValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditProduct = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async ({category_id,...values}) => await request.requestByLoadingAndToken({
        request: updateProductById,
        args: [id, values],
        showMessage: true,
        success: _ => request.nav('/products'),
    });
    // - - - - - - - - - - - - //
    const { id } = useParams();
    const [categories, setCategories] = useState({categories: [], categories_selected: 0, subcategory_id: 0});
    const [subcategory, setSubCategory] = useState([]);
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
        validationSchema: editProductValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getCategories,
            args: ['?is_main=1'],
            success: req => setCategories(preState => ({...preState, categories: req.data.data.data})),
            oneStart: true,
        },{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getProductById,
            args:[id],
            success: req => {
                formik.setValues({ 
                    ...formik.values,
                    title: req.data.data.title,
                    description: req.data.data.description,
                    show_in_home_page: req.data.data.show_in_home_page,
                    price: req.data.data.price,
                    stock: req.data.data.stock,
                    features: req.data.data.features,
                    discount_percent: req.data.data.discount_percent,
                    category_id: `${req.data.data.sub_category.category.id}`,
                });
                setCategories(preState => ({...preState, categories_selected: req.data.data.sub_category.category.id, subcategory_id: req.data.data.subcategory_id}));
            }
        }],
    });
    // - - - - - - - - - - - - //
    useLayoutEffect(() => {
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
        else if(categories.subcategory_id){
            (async () => await request.requestByToken({
                request: getCategories,
                args: [`?parent_id=${categories.categories_selected}`],
                success: req => {
                    setSubCategory(req.data.data.data);
                    formik.setFieldValue('subcategory_id', categories.subcategory_id);
                },
            }))();
            setCategories(preState => ({... preState, subcategory_id: 0}));
        }
    }, [categories, formik.values.category_id]);
    // - - - - - - - - - - - - //
    return (
        <InputProduct 
            formik={formik}
            categories={categories}
            subcategory={subcategory}
            title='ویرایش محصول'
            btnText='ویرایش'
        />
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditProduct;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //