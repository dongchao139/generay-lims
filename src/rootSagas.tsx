import {put, takeEvery} from 'redux-saga/effects';
import { IAction } from './reducer';
import { history } from 'umi';
import store from './store';

function* doLogin(action: IAction) {
  console.log('doLogin');
  // 模拟登录
  setTimeout(() => {
    console.log('push history');
      store.dispatch({
        type: 'doLogin'
      });
      history.push('/pages/index');
  }, 200);
}

function* rootSagas() {
  yield takeEvery('login', doLogin);
}

export default rootSagas;