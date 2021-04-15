import { combineReducers } from 'redux';
import globalReducers from './reducers/globalReducers';
import chatReducers from './reducers/chatReducers';

export default combineReducers({ global: globalReducers, chat: chatReducers });
