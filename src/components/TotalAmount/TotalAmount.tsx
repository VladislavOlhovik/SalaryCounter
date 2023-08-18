import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from "../../reduxStore/store";
import { changeTotalAmountAC } from "../../reduxStore/appReducer";
import './totalAmount.css'


export const TotalAmount = () => {
    const dispatch = useDispatch()
    const totalAmount = useSelector<RootStateType, number>((state) => state.app.totalAmount)

    const onChangeTotalAmount = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = value.replace(/[^0-9]/g, '');
        if (numericValue !== '0' && numericValue.startsWith('0')) {
            dispatch(changeTotalAmountAC(+numericValue.substring(1)))
        } else {
            dispatch(changeTotalAmountAC(+numericValue))
        }
    }

    return (
        <div className="totalAmountWrapper">
            <div>
                Total Amount of Salary
            </div>
            <input type="text" onChange={onChangeTotalAmount} value={totalAmount} />
        </div>
    )
}