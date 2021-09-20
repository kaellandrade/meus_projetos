import { createStore, combineReducers } from 'redux';

import friendReducer from './reducers/friend';
import modalReducer from './reducers/modal';
import Reduceconfigs from './reducers/configs';

const reducers = combineReducers({
    friends: friendReducer,
    modal: modalReducer,
    config: Reduceconfigs 
})

const storeConfig = _ => {
    return createStore(reducers)
}

export default storeConfig;