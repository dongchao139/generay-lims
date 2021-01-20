import React, {useCallback} from 'react'
import { Redirect } from 'umi';
import {useMappedState} from 'redux-react-hook';

/**
 * 验证是否登录，如果没有登录，跳转到登录页
 * @param props 
 */
const Auth: React.FC = (props) => {
    const mapState = useCallback(state => {
        console.log(state);
        return {
            auth: state.auth
        }
    },[]);
    const {auth} = useMappedState(mapState);
    console.log('auth');
    if (auth) {
        return <>{props.children}</>;
    } else {
        return <Redirect to='/login' />
    }
}
export default Auth;