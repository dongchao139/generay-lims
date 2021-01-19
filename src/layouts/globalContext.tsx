import React from 'react';
import { StoreContext } from 'redux-react-hook';
import store from '../store';

const GlobalContextWrapper: React.FC = (props: any) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default GlobalContextWrapper