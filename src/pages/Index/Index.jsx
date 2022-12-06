// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowUser from '../../components/ShowUser/ShowUser';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import { useLoading } from '../../hooks/useLoading';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Index = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    useLoading();

    return user.isAuth?
        <>
        <h1>کاربر</h1>
        <ShowUser user={user.user} />
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