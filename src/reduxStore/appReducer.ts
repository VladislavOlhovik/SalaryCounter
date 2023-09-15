export type StateType = {
    totalAmount: string,
    filterType: FilterType,
    workers: Array<WorkersType>,
    shiftInfo: ShiftInfoType,
    isActiveInfoWindow: boolean,
}
export type FilterType = 'DEFAULT' | 'PER_SHIFT' | 'PER_WEEK' | 'PER_MONTH' | 'PER_YEAR';
export type WorkersType = {
    // to-do: provide id (uuid or ulid)
    workerName: string,
    shifts: string,
    salaryDefault: string,
    salaryPerShift: string,
    salaryPerWeek: string,
    salaryPerMonth: string,
    salaryPerYear: string,
}
type ShiftInfoType = {
    'PER_SHIFT': string,
    'PER_WEEK': string,
    'PER_MONTH': string,
    'PER_YEAR': string,
}
type ActionAppReducerType = ReturnType<typeof changeTotalAmountAC>
    | ReturnType<typeof addWorkerAC>
    | ReturnType<typeof calculateSalaryAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setFilterTypeAC>
    | ReturnType<typeof changeIsActiveInfoWindowAC>
    | ReturnType<typeof saveShiftInfoAC>

let initState: StateType = {
    totalAmount: '0',
    filterType: 'DEFAULT',
    shiftInfo: {
        'PER_SHIFT': '1',
        'PER_WEEK': '6',
        'PER_MONTH': '26',
        'PER_YEAR': '312'
    },
    workers: [],
    isActiveInfoWindow: false,
}

const calculateSalaryByDefault = (obj: StateType) => {
    const initValue = 0
    const totalShifts = obj.workers.reduce((acc, el) => acc + (+el.shifts), initValue)
    const salaryPerShift = +obj.totalAmount / +totalShifts;
    return {
        ...obj, workers: obj.workers.map(el => {
            return {
                ...el,
                salaryDefault: (salaryPerShift * (+el.shifts)).toFixed(2),
                salaryPerShift: salaryPerShift.toFixed(2),
                salaryPerWeek: (salaryPerShift * +obj.shiftInfo.PER_WEEK).toFixed(2),
                salaryPerMonth: (salaryPerShift * +obj.shiftInfo.PER_MONTH).toFixed(2),
                salaryPerYear: (salaryPerShift * +obj.shiftInfo.PER_YEAR).toFixed(2),
            }
        })
    }
}

export const appReducer = (state = initState, action: ActionAppReducerType) => {
    switch (action.type) {
        case 'CHANGE_TOTAL_AMOUNT':
            return { ...state, totalAmount: action.totalAmount }
        case 'SET_FILTER_TYPE':
            return { ...state, filterType: action.filterType }
        // to-do: remove worker by id
        case 'ADD_WORKER':
            return {
                ...state, workers: [
                    ...state.workers,
                    {
                        workerName: action.workerName,
                        shifts: action.shifts,
                        salaryDefault: 'Press calculate',
                        salaryPerShift: 'Press calculate',
                        salaryPerWeek: 'Press calculate',
                        salaryPerMonth: 'Press calculate',
                        salaryPerYear: 'Press calculate',
                    }]
            }
        case 'CALCULATE_SALARY':
            return calculateSalaryByDefault(state)
        case 'CHANGE_IS_ACIVE_INFO_WINDOW':
            return { ...state, isActiveInfoWindow: action.isActiveInfoWindow }
        case 'SAVE_SHIFT_INFO':
            return { ...state, shiftInfo: { ...state.shiftInfo, ...action.obj } }
        case 'RESET':
            return { ...initState }
        default: return state
    }
}



export const changeTotalAmountAC = (totalAmount: string) => ({ type: 'CHANGE_TOTAL_AMOUNT', totalAmount } as const)
export const addWorkerAC = (workerName: string, shifts: string) => ({ type: 'ADD_WORKER', workerName, shifts } as const)
export const calculateSalaryAC = () => ({ type: 'CALCULATE_SALARY' } as const)
export const resetAC = () => ({ type: 'RESET' } as const)
export const setFilterTypeAC = (filterType: FilterType) => ({ type: 'SET_FILTER_TYPE', filterType } as const)
export const changeIsActiveInfoWindowAC = (isActiveInfoWindow: boolean) => ({ type: 'CHANGE_IS_ACIVE_INFO_WINDOW', isActiveInfoWindow } as const)
export const saveShiftInfoAC = (obj:{'PER_WEEK':string,'PER_MONTH':string,'PER_YEAR':string}) => ({ type: 'SAVE_SHIFT_INFO', obj } as const)
