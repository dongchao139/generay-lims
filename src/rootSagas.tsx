import { put, takeEvery } from 'redux-saga/effects';
import { IAction } from './reducer';
import { history } from 'umi';
import store from './store';

function* doLogin(action: IAction) {
  // 模拟登录
  setTimeout(() => {
    store.dispatch({
      type: 'doLogin',
      payload: {
        userId: '1',
        userName: '系统管理员',
        token: 'abc'
      }
    });
    history.push('/pages/index');
  }, 200);
}

function* rootSagas() {
  yield takeEvery('login', doLogin);
}

export default rootSagas;