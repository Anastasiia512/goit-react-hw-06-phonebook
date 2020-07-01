import { createStore, combineReducers } from 'redux';
import contacts from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';

const rootReducer = combineReducers({
   contactsList: contacts,
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
