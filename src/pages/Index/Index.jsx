// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { UserContext, config as userConfig } from '../../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowUser from '../../components/ShowUser/ShowUser';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import { useLoading } from '../../hooks/useLoading';
import { toast } from 'react-toastify';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Index = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    useLoading();
    const dataUser = localStorage.getItem('datauser');
    let data;
    const clearUserHandler = () => {
        user.setAuthUser(false, {
            ... userConfig.user
        });
        toast.success('انجام شد!')
        localStorage.removeItem('datauser');
    }
    return ((user.isAuth && (data = user.user)) || (dataUser && (data = JSON.parse(dataUser))))?
        <>
        <h1>کاربر</h1>
        <ShowUser user={data} />
        <Button onClick={clearUserHandler}>لوگ آوت</Button>
        </>
    :(
        <Card width='20%' margin='120px auto'>
            <h3>شما لاگین نکردید</h3>
            <Button onClick={() => navigate('/sign-in')}>ورود</Button>
        </Card>
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Index;