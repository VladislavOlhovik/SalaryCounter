export type StateType = {
    totalAmount: number,
    workers: Array<WorkersType>
}
export type WorkersType = {
    workerName: string,
    shifts: number,
    salary: number,
}

type ActionAppReducerType = ReturnType<typeof changeTotalAmountAC>
    | ReturnType<typeof addWorkerAC>
    | ReturnType<typeof calculateSalaryAC>
    | ReturnType<typeof resetAC>

let initState: StateType = {
    totalAmount: 0,
    workers: []
}

const calc = (obj:StateType) => {
    const initValue = 0
    const totalShifts = obj.workers.reduce( (acc,el) => acc+el.shifts, initValue)
    return {...obj, workers: obj.workers.map(el => {
        return {...el, salary: obj.totalAmount/totalShifts*el.shifts}
    })}
}

export const appReducer = (state = initState, action: ActionAppReducerType) => {
    switch (action.type) {
        case 'CHANGE_TOTAL_AMOUNT':
            return {...state, totalAmount: action.totalAmount}
        case 'ADD_WORKER':
            return {...state, workers:[...state.workers, {workerName:action.workerName, shifts: action.shifts, salary:NaN }] }
        case 'CALCULATE_SALARY':
            return calc(state)
        case 'RESET':
            return {...initState}
        default: return state
    }
}



export const changeTotalAmountAC = (totalAmount: number) => ({ type: 'CHANGE_TOTAL_AMOUNT', totalAmount } as const)
export const addWorkerAC = (workerName:string ,shifts: number) => ({ type: 'ADD_WORKER', workerName, shifts } as const)
export const calculateSalaryAC = () => ({ type: 'CALCULATE_SALARY' } as const)
export const resetAC = () => ({ type: 'RESET' } as const)