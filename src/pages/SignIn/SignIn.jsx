// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Button from '../../components/UI/Button/Button';
import { useFormikLogin } from '../../hooks/LoginForm';
import InputForm from '../../components/UI/InputForm/InputForm';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import { useLoading } from '../../hooks/useLoading';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const SignIn = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    useLoading();
    const submitHandler = ({ gender,... values }) => {
        toast('با موفقیت انجام شد');
        user.setAuthUser(true, {
            isMen: gender === 'his',
            ... values
        });
        navigate('/');
        
    }
    const formik = useFormikLogin({
        username: '',
        email: '',
        password: '',
        gender: 'his',
    },submitHandler);

    return (<>
        <h1>ورود</h1>
        <form className='myform mycard' onSubmit={formik.handleSubmit}>
            <InputForm 
                name='username'
                touched={formik.touched.username}
                config={formik.getFieldProps}
                error={formik.errors.username}
                title='یوزرنیم'
            />

            <InputForm 
                name='email'
                touched={formik.touched.email}
                config={formik.getFieldProps}
                error={formik.errors.email}
                type='email'
                title='ایمیل'
            />
        
            <InputForm 
                name='password'
                touched={formik.touched.password}
                config={formik.getFieldProps}
                error={formik.errors.password}
                type='password'
                title='پسورد'
            />
            <label htmlFor="gender">جنسیت</label>
            <select name="gender" onChange={formik.handleChange}>
                <option value="his">مرد</option>
                <option value="her">زن</option>
            </select>

            <Button type='submit'>لاگین</Button>
        </form>
    </>);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default SignIn;