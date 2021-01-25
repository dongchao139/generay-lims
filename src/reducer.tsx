import { Reducer } from "redux";
import { IState, ITab } from "./store";
import {defaultState} from './store';
import {history} from 'umi';

export interface IAction {
  type: string;
  payload?: any
}

function handleAddTab(state: IState, payload: string): IState {
  const beforeTabs = state.tabs;
  const optName = payload;
  let newTabs = beforeTabs.map(t => {
    if (t.name !== optName) {
      t.active = false;
    } else {
      t.active = true;
    }
    return t;
  });
  if (newTabs.filter(t => t.name === optName).length === 0) {
    newTabs = [...newTabs, {name: optName, active: true}];
  };
  return {...state, tabs: newTabs};
}

function handleSwitchTab(state:IState, payload: ITab): IState {
  const beforeTabs = state.tabs;
  const tab = payload;
  const newTabs = beforeTabs.map(t => {
    if (t.name === tab.name) {
      t.active = true;
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
    if (t.name === tab.name) {
      return false;
    }
    return true;
  });
  if (newTabs.length > 0) {
    newTabs[0].active = true;
    activeTab = newTabs[0];
    if (activeTab) {
      history.push("/pages/"+activeTab.name);
    }
  }
  return {...state, tabs: newTabs};
}

const reducer: Reducer<IState, IAction> = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case 'doLogin':
      return {
        ...state,
        auth: action.payload
      }
    case 'logout':
      return {...state, auth: null}
    case 'add-tab':
      return handleAddTab(state, action.payload);
    case 'switch-tab':
      return handleSwitchTab(state, action.payload);
    case 'close-tab':
      return handleCloseTab(state, action.payload);
    default:
      return state;
  }
}

export default reducer;