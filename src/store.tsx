import { createStore, compose, Store, applyMiddleware } from 'redux';
import reducer, { IAction } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

export interface IAuthInfo {
    userId?: string;
    userName?: string;
    token?: string;
}

export interface ITab {
    name: string;
    active: boolean;
}
  
export interface IState {
    auth?: IAuthInfo | null;
    tabs: ITab[];
    [key: string]: any
}

export const defaultState: IState = {
    tabs: []
}

const store: Store<IState, IAction> = createStore(reducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;