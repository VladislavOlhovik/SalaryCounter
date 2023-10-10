import { ChangeEvent } from "react";

import { StateType } from "@store";

export const sanitizeNumericInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/[^0-9.]/g, '');
    const cleanedValue = numericValue.replace(/\.(?=.*\.)/g, '');
    if (cleanedValue !== '0' && cleanedValue.startsWith('0') && !cleanedValue.startsWith('0.')) {
        return cleanedValue.substring(1)
    } else {
        return cleanedValue
    }
}

export const calculateSalary = (obj: StateType) => {
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