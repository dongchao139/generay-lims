import { applyMiddleware, compose, createStore, Store } from 'redux';
import reducer, { IAction } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

function getQueryVariable(query: string) {
  let variable: { [key: string]: string } = {};
  let vars = query.split("&");
  for (let i=0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    variable[pair[0]] = pair[1];
  }
  return variable;
}

export interface IAuthInfo {
    userId?: string;
    userName?: string;
    token?: string;
}

export interface ITab {
    name: string;
    active: boolean;
    params?: {[key: string]: string};
}

export interface IState {
    auth?: IAuthInfo | null;
    tabs: ITab[];
    [key: string]: any
}

export const defaultState: IState = {
  tabs: []
}

if (window.localStorage && window.localStorage.authInfo) {
  defaultState.auth = window.localStorage.authInfo;
}

if (window.location.pathname.startsWith("/pages/")) {
  let pathName = window.location.pathname.substr("/pages/".length);
  let params = null;
  if (pathName.indexOf("?") > 0) {
    pathName = pathName.substring(0, pathName.indexOf("?"));
    params = getQueryVariable(pathName.substring(pathName.indexOf("?") + 1));
  }
  let tab: ITab;
  if (params) {
    tab = {
      name: pathName,
      active: true,
      params: params
    }
  } else {
    tab = {
      name: pathName,
      active: true
    }
  }
  defaultState.tabs.push(tab);
}

const store: Store<IState, IAction> = createStore(reducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
