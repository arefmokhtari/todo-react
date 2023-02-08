// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useParams } from 'react-router';
import { useFormik } from 'formik';
import { useRequest, requestName } from '../../../hooks/request-hook';
import { getNewsById, updateNewsById } from '../../../api/requests';
import { editValidate } from '../../../validates/newsValidate';
import InputNews from '../../../components/InputNews/InputNews';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditNews = () => {
    // - - - - - - - - - - - - //
    const onSubmit = async values => await request.requestByLoadingAndToken({
        request: updateNewsById,
        args: [id, values],
        showMessage: true,
        success: _ => request.nav('/news'),
    });
    // - - - - - - - - - - - - //
    const { id } = useParams();
    const request = useRequest({
        start: [{
            requestName: requestName.BYLOADINGANDTOKEN,
            request: getNewsById,
            args: [id],
            success: req => {
                formik.setValues({ title: req.data.data.title, text: req.data.data.text, image: '', is_important: req.data.data.is_important?'1':'' })
            },
        }],
    });
    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            image: null,
            is_important: '',
        },
        validationSchema: editValidate,
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
export default EditNews;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //