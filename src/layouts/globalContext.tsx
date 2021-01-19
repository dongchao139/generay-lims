import React from 'react';
import { StoreContext } from 'redux-react-hook';
import store from '../store';

/**
 * 用于提供全局的context的容器
 * 这里提供了Redux的store（使用了redux-react-hook的实现）
 * @param props 
 */
const GlobalContextWrapper: React.FC = (props: any) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default GlobalContextWrapper