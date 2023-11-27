import { appReducer } from './reducers'
import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'

const rootRedusers = combineReducers({
  app: appReducer,
})

export type RootStateType = ReturnType<typeof rootRedusers>
export const store = createStore(rootRedusers)

export type { StateType, WorkersType, ShiftInfoType, FilterType } from './types'
export {
  resetAC,
  calculateSalaryAC,
  changeTotalAmountAC,
  addWorkerAC,
  deleteWorkerAC,
  setFilterTypeAC,
  changeIsActiveInfoWindowAC,
  saveShiftInfoAC,
} from './actions'

export default store
