import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import authReducer from "./reducers/authReducer/authReducer";
import eventsReducer from "./reducers/eventsReducer/eventsReducer";

const rootReducer = combineReducers({
  authReducer,
  eventsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
