import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from "../../reduxStore/store";
import { WorkersType, calculateSalaryAC, resetAC } from "../../reduxStore/appReducer";
import './mainButtonsBlock.css'


export const MainButtonsBlock = () => {

    const dispatch = useDispatch()
    const workersList = useSelector<RootStateType, Array<WorkersType>>((state) => state.app.workers)

    const onCalculate = () => {
        dispatch(calculateSalaryAC())
    }
    const onReset = () => {
        dispatch(resetAC())
    }

    return (
        <div className="mainButtonsBlockWrapper"> 
            <button
                disabled={!workersList.length}
                onClick={onCalculate}>
                Calculate
            </button>
            <button
                onClick={onReset}>
                Reset
            </button>
        </div>
    )
}
