import { onConnect } from 'crossmessaging';
import getState from './getStoredState'; /* If you don't want to persist states, use './getDefaultState' */// eslint-disable-line max-len
import { receiveNotification } from '../actions/extension';

export default function (configure, callback) {
  getState(configure, store => {
    onConnect(
      () => ({ name: 'init', state: { sidebar: store.getState().sidebar } }),
      {
        'redux-notify': (message) => { store.dispatch(receiveNotification(message.action)); }
      }
    );
    callback(store);
  });
}
