// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Card from "../UI/Card/Card";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ShowUser = ({user}) => (
    <Card width='20%' margin='100px auto'>
        <h2 >یوزرنیم: {user.username}</h2>
        <h3>ایمیل: {user.email}</h3>
        <h3>جنسیت: {user.isMen?'مرد':'زن'}</h3>
    </Card>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ShowUser;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //