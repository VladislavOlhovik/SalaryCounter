import { appReducer } from './reducers';
import { combineReducers, createStore } from "redux";


const rootRedusers = combineReducers({
    app: appReducer,
})

export type RootStateType = ReturnType<typeof rootRedusers>
export const store = createStore(rootRedusers)
//@ts-ignore
// window.store = store

export type { StateType, WorkersType, ShiftInfoType, FilterType } from "./types"
export {
    resetAC, calculateSalaryAC, changeTotalAmountAC,
    addWorkerAC, deleteWorkerAC, setFilterTypeAC,
    changeIsActiveInfoWindowAC, saveShiftInfoAC
} from "./actions"

export default store;