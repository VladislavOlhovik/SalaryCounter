import React, { ChangeEvent, useState } from "react";
import { useDispatch } from 'react-redux'
import { addWorkerAC } from "../../reduxStore/appReducer";
import './workerInfo.css'

export const WorkerInfo = () => {

    const dispatch = useDispatch()
    const [workerName, setWorkerName] = useState('')
    const [shifts, setShifts] = useState(0)

    const onChangeWorkerName = (e: ChangeEvent<HTMLInputElement>) => {
        setWorkerName(e.currentTarget.value);
    };
    const onChangeShift = (param: Boolean) => {
        setShifts(param ? shifts + 0.5 : shifts - 0.5)
    }
    const addWorkerInfo = () => {
        dispatch(addWorkerAC(workerName, shifts))
        setShifts(0)
        setWorkerName('')
    }

    return (
        <div className="workwrsWrapper">
            <div>
                Worker info
            </div>
            <div className="inputBlock">
                <input type="text"
                    placeholder="enter the name"
                    value={workerName}
                    onChange={onChangeWorkerName} />
                <div>
                    Shifts
                    <button onClick={() => onChangeShift(false)}>-</button>
                    {shifts}
                    <button onClick={() => onChangeShift(true)}>+</button>
                </div>
            </div>
            <div>
                <button onClick={addWorkerInfo}>Add worker info</button>
            </div>
        </div>
    )
}