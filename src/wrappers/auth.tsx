import React from 'react'
import { Redirect } from 'umi';

const Auth: React.FC = (props) => {
    const isLogin = true;
    if (isLogin) {
        return <div>{props.children}</div>
    } else {
        return <Redirect to='/login' />
    }
}
export default Auth;