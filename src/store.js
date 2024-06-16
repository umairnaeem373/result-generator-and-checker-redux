import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { CreateData, Result } from "./Actioms/Reducers";


const Reducers=combineReducers({
    createData: CreateData,
    result: Result,
})

const store=createStore(Reducers,applyMiddleware(thunk))

export default store;