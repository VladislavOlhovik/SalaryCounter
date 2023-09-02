import { ChangeEvent } from "react";

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