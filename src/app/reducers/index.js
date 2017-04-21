import { combineReducers } from 'redux';
import sidebar from './sidebar';
import extension from './extension';

export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ sidebar, extension }) :
    combineReducers({ sidebar })
);
