import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import friendReducer from './reducers/friend';
import modalReducer from './reducers/modal';
import Reduceconfigs from './reducers/configs';


const reducers = combineReducers({
    friends: friendReducer,
    modal: modalReducer,
    config: Reduceconfigs 
})

const storeConfig = _ => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig;