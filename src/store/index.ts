import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './reducers'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>

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
