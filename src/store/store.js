import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"

import loginReducer from './reducer/loginReducer'
import bankReducer from './reducer/bankReuder'

const rootReducer = combineReducers({
  loginState: loginReducer,
  bankState: bankReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;