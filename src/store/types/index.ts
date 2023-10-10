export type FilterType = 'DEFAULT' | 'PER_SHIFT' | 'PER_WEEK' | 'PER_MONTH' | 'PER_YEAR';
export interface StateType {
    totalAmount: string,
    filterType: FilterType,
    workers: Array<WorkersType>,
    shiftInfo: ShiftInfoType,
    isActiveInfoWindow: boolean,
}
export interface WorkersType {
    workerName: string,
    id: string,
    shifts: string,
    salaryDefault: string,
    salaryPerShift: string,
    salaryPerWeek: string,
    salaryPerMonth: string,
    salaryPerYear: string,
}
export interface ShiftInfoType {
    'PER_SHIFT': string,
    'PER_WEEK': string,
    'PER_MONTH': string,
    'PER_YEAR': string,
}