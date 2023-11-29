export type FilterType =
  | 'DEFAULT'
  | 'PER_SHIFT'
  | 'PER_WEEK'
  | 'PER_MONTH'
  | 'PER_YEAR'
export interface StateType {
  totalAmount: number
  filterType: FilterType
  workers: Array<WorkersType>
  shiftInfo: ShiftInfoType
  isActiveInfoWindow: boolean
}
export interface WorkersType {
  workerName: string
  id: string
  shifts: number
  salaryDefault: number | string
  salaryPerShift: number | string
  salaryPerWeek: number | string
  salaryPerMonth: number | string
  salaryPerYear: number | string
}
export interface ShiftInfoType {
  PER_SHIFT: number
  PER_WEEK: number
  PER_MONTH: number
  PER_YEAR: number
}
