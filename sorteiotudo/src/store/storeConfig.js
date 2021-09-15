import { createStore, combineReducers } from 'redux';

import friendReducer from './reducers/friend';
import modalReducer from './reducers/modal';

const reducers = combineReducers({
    friends: friendReducer,
    modal: modalReducer
})

const storeConfig = _ => {
    return createStore(reducers)
}

export default storeConfig;