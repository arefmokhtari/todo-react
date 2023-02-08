// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import EditAndAddCategory from '../../../components/EditAndAddCategory/EditAndAddCategory';
import { useRequest, requestName } from '../../../hooks/request-hook';
import { categoryTitlevalidate } from '../../../validates/LoginValidate';
import { getCagegoryById, updateCategoryById } from '../../../api/requests';
import { useParams } from 'react-router';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditCategories = () => {
    const { id } = useParams();
    // - - - - - - - - - - - - //
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getCagegoryById,
            args: [id],
            success: req => formik.setValues({ title: req.data.data.title }),
        }],
    });
    // - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: updateCategoryById,
        args: [id, values],
        showMessage: true,
        success: (_) => request.nav('/categories'),
    });
    // - - - - - - - - - - - - //
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: categoryTitlevalidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    return (
        <EditAndAddCategory 
            to='/categories'
            formik={formik}
            title='ویرایش دسته'
            isEdit={true}
            btnText='ویرایش'
        />
    );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditCategories;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //