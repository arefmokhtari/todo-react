// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useFormik } from 'formik';
import { useRequest } from '../../../hooks/request-hook';
import { addNews } from '../../../api/requests';
import { newsAddValidate } from '../../../validates/newsValidate';
import InputNews from '../../../components/InputNews/InputNews';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const AddNews = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async (values, { resetForm }) => await request.requestByLoadingAndToken({
        request: addNews,
        args: [values],
        showMessage: true,
        success: _ => resetForm(),
    });
    
    // - - - - - - - - - - - - //
    const request = useRequest({});
    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            image: null,
            is_important: '',
        },
        validationSchema: newsAddValidate,
        onSubmit,
    });
    // - - - - - - - - - - - - //
    return (
        <InputNews 
            formik={formik}
        />
     );
    // - - - - - - - - - - - - //
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default AddNews;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //