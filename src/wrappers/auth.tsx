import React, {useContext} from 'react'
import { Redirect } from 'umi';
import {StoreContext} from 'redux-react-hook';

const Auth: React.FC = (props) => {
    const store = useContext(StoreContext);
    const isLogin = store.getState().auth;
    if (isLogin) {
        return <>{props.children}</>;
    } else {
        return <Redirect to='/login' />
    }
}
export default Auth;