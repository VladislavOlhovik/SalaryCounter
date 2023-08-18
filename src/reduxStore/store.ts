import { appReducer } from './appReducer';
import { combineReducers, createStore } from "redux";

const rootRedusers = combineReducers({
    app: appReducer,
})

export type RootStateType = ReturnType<typeof rootRedusers>
export const store = createStore(rootRedusers)
//@ts-ignore
window.store = store
export default store