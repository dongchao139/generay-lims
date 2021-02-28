import React, { useCallback } from 'react';
import { Redirect } from 'umi';
import { useMappedState } from 'redux-react-hook';

function getPathFromLocation(): string | null {
  if (window.location.pathname.startsWith("/pages/")) {
    return window.location.pathname + window.location.search;
  }
  return null;
}

/**
 * 验证是否登录，如果没有登录，跳转到登录页
 * @param props
 */
const Auth: React.FC = (props) => {
    const mapState = useCallback(state => {
        return {
            auth: state.auth
        }
    },[]);
    const {auth} = useMappedState(mapState);
    if (auth) {
        return <>{props.children}</>;
    } else {
      (window as any).historyFrom = getPathFromLocation();
        return <Redirect to='/login'/>
    }
}
export default Auth;
