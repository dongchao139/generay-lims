import React, {useContext} from 'react'
import { Redirect } from 'umi';
import {StoreContext} from 'redux-react-hook';

/**
 * 验证是否登录，如果没有登录，跳转到登录页
 * @param props 
 */
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