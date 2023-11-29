import { v4 as uuidv4 } from 'uuid'

import { StateType } from '../types'

import {
  ADD_WORKER,
  ActionAppReducerType,
  CALCULATE_SALARY,
  CHANGE_IS_ACTIVE_INFO_WINDOW,
  CHANGE_TOTAL_AMOUNT,
  DELETE_WORKER,
  RESET,
  SAVE_SHIFT_INFO,
  SET_FILTER_TYPE,
} from '../actions'
import { calculateSalary } from '@helpers'

let initState: StateType = {
  totalAmount: 0,
  filterType: 'DEFAULT',
  shiftInfo: {
    PER_SHIFT: 1,
    PER_WEEK: 6,
    PER_MONTH: 26,
    PER_YEAR: 312,
  },
  workers: [],
  isActiveInfoWindow: false,
}

export const appReducer = (state = initState, action: ActionAppReducerType) => {
  switch (action.type) {
    case CHANGE_TOTAL_AMOUNT:
      if (state.workers.length === 0) {
        return { ...state, totalAmount: action.totalAmount }
      } else {
        return calculateSalary({ ...state, totalAmount: action.totalAmount })
      }
    case SET_FILTER_TYPE:
      return { ...state, filterType: action.filterType }
    case ADD_WORKER:
      return {
        ...state,
        workers: [
          ...state.workers,
          {
            workerName: action.workerName,
            id: uuidv4(),
            shifts: action.shifts,
            salaryDefault: action.defaultSalary,
            salaryPerShift: action.defaultSalary,
            salaryPerWeek: action.defaultSalary,
            salaryPerMonth: action.defaultSalary,
            salaryPerYear: action.defaultSalary,
          },
        ],
      }
    case CALCULATE_SALARY:
      return calculateSalary(state)
    case DELETE_WORKER: {
      return {
        ...state,
        workers: state.workers.filter((el) => el.id !== action.id),
      }
    }
    case CHANGE_IS_ACTIVE_INFO_WINDOW:
      return { ...state, isActiveInfoWindow: action.isActiveInfoWindow }
    case SAVE_SHIFT_INFO:
      return { ...state, shiftInfo: { ...state.shiftInfo, ...action.obj } }
    case RESET:
      return { ...initState }
    default:
      return state
  }
}
