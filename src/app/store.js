import {createStore, applyMiddleware ,combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import logger from 'redux-logger'




const store = createStore(combineReducers({userReducer}),applyMiddleware(logger));

export default store;