// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import React, { useReducer } from 'react';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const config = {
    isAuth: false,
    user: {
        isMen: true,
        username: '',
        email: '',
        password: '',
    },
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const UserContext = React.createContext({
    ... config,
    setAuthUser: () => {}
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const userReducer = (state, action) => {
    switch(action.type){
        case 'AUTH':
            return {isAuth: action.isAuth, user: {... action.user}};
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const User = ({children: child}) => {
    const [user, setConfigureUser] = useReducer(userReducer, {... config});

    const isAuthHandler = (isAuth = false, user = {... config.user}) => {
        setConfigureUser({
            type: 'AUTH',
            isAuth: isAuth,
            user,
        })
    }

    return <UserContext.Provider value={{
        ... user,
        setAuthUser: isAuthHandler,
    }}>
        {child}
    </UserContext.Provider>;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default User;