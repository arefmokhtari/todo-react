// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import EditAndAddCategory from '../../../components/EditAndAddCategory/EditAndAddCategory';
import { useRequest, requestName } from '../../../hooks/request-hook';
import { addCategory as addCategoryReq, getCategories } from '../../../api/requests';
import { useState } from 'react';
import { categoryTitlevalidate } from '../../../validates/LoginValidate';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddCategories = () => {
    // - - - - - - - - - - - - //
    const [parents, setParents] = useState([]);
    // - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getCategories,
            args: ['?is_main=1'],
            success: req => setParents(req.data.data.data),
        }],
    });
    // - - - - - - - - - - - - //
    const onSubmit = async (values, { resetForm })  => await request.requestByLoadingAndToken({
        request:addCategoryReq,
        args: [values],
        showMessage: true,
        success: _ => resetForm(),
        start: true,
    });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            title: '',
            parent_id: '',
        },
        validationSchema: categoryTitlevalidate,
        onSubmit,
    });
    
    // - - - - - - - - - - - - //
    return (
        <EditAndAddCategory
            to='/categories'
            formik={formik}
            title='افزودن دسته' 
            parents={parents}
            btnText='افزودن'
        />
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddCategories;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //