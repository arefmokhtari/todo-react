// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Card from "../UI/Card/Card";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const ShowUser = ({user}) => (
    <Card width='20%' margin='100px auto'>
        <h2 >username: {user.username}</h2>
        <h3>email: {user.email}</h3>
        <h3>gender: {user.isMen?'his':'her'}</h3>
    </Card>
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default ShowUser;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //