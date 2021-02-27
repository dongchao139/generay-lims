import { put, takeEvery } from 'redux-saga/effects';
import { IAction } from './reducer';
import { history } from 'umi';
import store from './store';

function* doLogin(action: IAction) {
  // 模拟登录
  setTimeout(() => {
    const authInfo = {
      type: 'doLogin',
      payload: {
        userId: '1',
        userName: '系统管理员',
        token: 'abc'
      }
    };
    store.dispatch(authInfo);
    if (window.localStorage) {
      const storage = window.localStorage;
      storage.authInfo = JSON.stringify(authInfo);
      setTimeout(() => {
        window.localStorage.clear();
        store.dispatch({
          type: 'doLogout'
        });
      }, 1000 * 60 * 60 * 2);
    }
    history.push('/pages/index');
  }, 200);
}

function* doLogout() {
  if (window.localStorage) {
    window.localStorage.clear();
  }
  store.dispatch({
    type: 'doLogout'
  });
}

function* rootSagas() {
  yield takeEvery('login', doLogin);
  yield takeEvery('logout', doLogout);
}

export default rootSagas;
