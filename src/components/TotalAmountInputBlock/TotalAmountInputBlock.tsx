import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from "../../reduxStore/store";
import { changeTotalAmountAC } from "../../reduxStore/appReducer";
import './totalAmountInputBlock.css'
import { StylePad } from "../StylePad/StylePad";
import { sanitizeNumericInput } from "../../helpers/commonHelpers";


export const TotalAmountInputBlock = () => {

    const dispatch = useDispatch()
    const totalAmount = useSelector<RootStateType, string>((state) => state.app.totalAmount)

    const onChangeTotalAmount = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTotalAmountAC(sanitizeNumericInput(event)))
    }

    return (
        <StylePad styleProp='totalAmountInputBlockWrapper'>
            <div>
                Total Amount of Salary
            </div>
            <input type="text" onChange={onChangeTotalAmount} value={totalAmount} />
        </StylePad>
    )
}