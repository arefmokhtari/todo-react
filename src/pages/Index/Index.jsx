import { useFormik } from 'formik';
import { setToken, storeCategory } from '../../api/requests';

const Index = () => {
    const onSubmit = async values => {
        setToken('1|caufEFYNVTnceF5CJPP5MrMKBmpAKkTUqW18k6KA');
        const data = new FormData();
        data.append('title', values.title);
        data.append('image', values.image);
        const res = await storeCategory(data);
        console.log(res);
    }
    const formik = useFormik({
        initialValues: { title: '', image: null },
        onSubmit,
    });
    return <form onSubmit={formik.handleSubmit}>
        <input type='title' placeholder='name' onChange={formik.handleChange} name='title' />
        <input type='file' onChange={event => formik.setFieldValue('image', event.currentTarget.files[0])} />
        <button type='submit'>send</button>
    </form>;
}

export default Index;