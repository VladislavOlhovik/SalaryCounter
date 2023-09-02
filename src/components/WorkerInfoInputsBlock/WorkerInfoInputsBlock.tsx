import React, { ChangeEvent, useState } from "react";
import { useDispatch } from 'react-redux'
import { addWorkerAC } from "../../reduxStore/appReducer";
import './workerInfoInputsBlock.css'
import { StylePad } from "../StylePad/StylePad";
import { sanitizeNumericInput } from "../../helpers/commonHelpers";

export const WorkerInfoInputsBlock = () => {

    const dispatch = useDispatch()
    const [workerName, setWorkerName] = useState('')
    const [shifts, setShifts] = useState('0')

    const onChangeWorkerName = (e: ChangeEvent<HTMLInputElement>) => {
        setWorkerName(e.currentTarget.value);
    };
    const onChangeShifts = (e: ChangeEvent<HTMLInputElement>) => {
        setShifts(sanitizeNumericInput(e));
    };

    const addWorkerInfo = () => {
        dispatch(addWorkerAC(workerName, shifts))
        setShifts('0')
        setWorkerName('')
    }
    return (
        <StylePad styleProp="workerInfoInputsBlockWrapper">
            <div>
                Worker info
            </div>
            <div className="inputBlock">
                <input type="text"
                    placeholder="Enter the name"
                    value={workerName}
                    onChange={onChangeWorkerName} />
                <input type="text"
                    placeholder="Shifts"
                    value={shifts}
                    onChange={onChangeShifts} />
            </div>
            <div>
                <button onClick={addWorkerInfo}>Add worker info</button>
            </div>
        </StylePad>
    )
}