import { FilterType } from "@store";

export type ActionAppReducerType = ReturnType<typeof changeTotalAmountAC>
    | ReturnType<typeof addWorkerAC>
    | ReturnType<typeof deleteWorkerAC>
    | ReturnType<typeof calculateSalaryAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setFilterTypeAC>
    | ReturnType<typeof changeIsActiveInfoWindowAC>
    | ReturnType<typeof saveShiftInfoAC>

export const CHANGE_TOTAL_AMOUNT = 'CHANGE_TOTAL_AMOUNT';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
export const CALCULATE_SALARY = 'CALCULATE_SALARY';
export const DELETE_WORKER = 'DELETE_WORKER';
export const ADD_WORKER = 'ADD_WORKER';
export const CHANGE_IS_ACTIVE_INFO_WINDOW = 'CHANGE_IS_ACTIVE_INFO_WINDOW';
export const SAVE_SHIFT_INFO = 'SAVE_SHIFT_INFO';
export const RESET = 'RESET';
// to-do investigate with 'as const'
export const changeTotalAmountAC = (totalAmount: string) => ({ type: CHANGE_TOTAL_AMOUNT, totalAmount } as const)
export const addWorkerAC = (workerName: string, shifts: string, defaultSalary: string) => ({ type: ADD_WORKER, workerName, shifts, defaultSalary } as const)
export const deleteWorkerAC = (id: string) => ({ type: DELETE_WORKER, id } as const)
export const calculateSalaryAC = () => ({ type: CALCULATE_SALARY } as const)
export const resetAC = () => ({ type: RESET } as const)
export const setFilterTypeAC = (filterType: FilterType) => ({ type: SET_FILTER_TYPE, filterType } as const)
export const changeIsActiveInfoWindowAC = (isActiveInfoWindow: boolean) => ({ type: CHANGE_IS_ACTIVE_INFO_WINDOW, isActiveInfoWindow } as const)
export const saveShiftInfoAC = (obj: { 'PER_WEEK': string, 'PER_MONTH': string, 'PER_YEAR': string }) => ({ type: SAVE_SHIFT_INFO, obj } as const)
