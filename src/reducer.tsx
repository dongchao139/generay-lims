import { Reducer } from "redux";
import { IState, ITab } from "./store";
import {defaultState} from './store';
import {history} from 'umi';
import PageReducers from './pages/reducers';


export interface IAction {
  type: string;
  tabName?: string;
  payload?: any
}

function handleAddTab(state: IState, payload: any): IState {
  const beforeTabs = state.tabs;
  const enName = payload.enName;
  const chName = payload.chName;
  let newTabs = beforeTabs.map(t => {
    if (t.name !== enName) {
      t.active = false;
    } else {
      t.active = true;
      if (!t.params) {
        t.params = {}
      }
      t.params.search = payload.search
    }
    return t;
  });
  if (newTabs.filter(t => t.name === enName).length === 0) {
    const newTab = {
      name: enName,
      chName: chName,
      active: true,
      params: {
        search: payload.search
      }
    }
    newTabs = [...newTabs, newTab];
  };
  return {...state, tabs: newTabs};
}

function handleSwitchTab(state:IState, payload: ITab): IState {
  const beforeTabs = state.tabs;
  const tab = payload;
  const newTabs = beforeTabs.map(t => {
    if (t.name === tab.name) {
      t.active = true;
      if (!t.params) {
        t.params = {}
      }
      if (payload.params) {
        t.params.search = payload.params.search
      }
    } else {
      t.active = false;
    }
    return t;
  });
  return {...state, tabs: newTabs};
}

function handleCloseTab(state: IState, payload: ITab): IState {
  const beforeTabs = state.tabs;
  const tab = payload;
  let activeTab: ITab | null = null;
  const newTabs = beforeTabs.filter(t => {
    return t.name !== tab.name;
  });
  if (newTabs.length > 0) {
    newTabs[0].active = true;
    activeTab = newTabs[0];
    if (activeTab) {
      history.push("/pages/"+activeTab.name);
    }
  } else {
    history.push('/pages/index');
  }
  return {...state, tabs: newTabs};
}

function handleDefault(state: IState, action: IAction): IState {
  if (action.tabName) {
    return PageReducers[action.tabName](state, action);
  }
  return state
}
const reducer: Reducer<IState, IAction> = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case 'doLogin':
      return {
        ...state,
        auth: action.payload
      }
    case 'doLogout':
      return {...state, auth: null}
    case 'add-tab':
      return handleAddTab(state, action.payload);
    case 'switch-tab':
      return handleSwitchTab(state, action.payload);
    case 'close-tab':
      return handleCloseTab(state, action.payload);
    default:
      return handleDefault(state, action);
  }
}

export default reducer;
