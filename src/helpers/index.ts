import { ChangeEvent } from 'react'

import { StateType } from '@store'

export const sanitizeNumericInput = (event: ChangeEvent<HTMLInputElement>) => {
  const value = event.currentTarget.value
    .replace(/[^\d.]/g, '') // Remove all symbols except digits and the decimal point
    .replace(/^0+(\d)/, '$1') // Remove leading zeros
    .replace(/(\.\d{1})\d+$/, '$1') // Keep only one digit after the decimal point
  const numberValue = parseFloat(value) // Ensure the result is a number
  return isNaN(numberValue) ? 0 : numberValue
}

export const calculateSalary = (obj: StateType) => {
  const initValue = 0
  const totalShifts = obj.workers.reduce(
    (acc, el) => acc + el.shifts,
    initValue,
  )
  const salaryPerShift = obj.totalAmount / totalShifts
  return {
    ...obj,
    workers: obj.workers.map((el) => {
      return {
        ...el,
        salaryDefault: (salaryPerShift * el.shifts).toFixed(1),
        salaryPerShift: salaryPerShift.toFixed(1),
        salaryPerWeek: (salaryPerShift * obj.shiftInfo.PER_WEEK).toFixed(1),
        salaryPerMonth: (salaryPerShift * obj.shiftInfo.PER_MONTH).toFixed(1),
        salaryPerYear: (salaryPerShift * obj.shiftInfo.PER_YEAR).toFixed(1),
      }
    }),
  }
}
