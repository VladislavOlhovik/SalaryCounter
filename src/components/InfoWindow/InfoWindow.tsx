import React, { useState } from "react"
import './infoWindow.css';
import { StylePad } from "../StylePad/StylePad";
import { StateType, changeIsActiveInfoWindowAC, saveShiftInfoAC } from "../../reduxStore/appReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../reduxStore/store";
import { sanitizeNumericInput } from "../../helpers/commonHelpers";

export const InfoWindow = () => {
    
    const { shiftInfo } = useSelector<RootStateType, StateType>((state) => state.app)
    const [perWeekValue, setPerWeekValue] = useState(shiftInfo.PER_WEEK);
    const [perMonthValue, setPerMonthValue] = useState(shiftInfo.PER_MONTH);
    const [perYearValue, setPerYearValue] = useState(shiftInfo.PER_YEAR);
    const dispatch = useDispatch()

    const onChangeIsActiveInfoWindow = () => {
        dispatch(changeIsActiveInfoWindowAC(false))
    }

    const saveShiftsInfo = () => {
        dispatch(saveShiftInfoAC({'PER_WEEK':perWeekValue,'PER_MONTH':perMonthValue,'PER_YEAR':perYearValue}))
        onChangeIsActiveInfoWindow()
    }

    return (
        <StylePad styleProp="infoWindowWrapper">
            <h1 className="closeButton"
                onClick={onChangeIsActiveInfoWindow}>
                x
            </h1>
            <p>The calculation</p>
            <p> is made in accordance with:</p>
            <input required type="text" pattern="^(?:[1-7](?:\.\d)?|0?\.[1-7])$"
                value={perWeekValue}
                onChange={(e) => setPerWeekValue(sanitizeNumericInput(e))} />
            <p>working day per week,</p>
            <input required type="text" pattern="^(?:[1-9]|1\d|2\d|30|31)$"
                value={perMonthValue}
                onChange={(e) => setPerMonthValue(sanitizeNumericInput(e))} />
            <p>working day per month and</p>
            <input required type="text" pattern="^(?:[1-9]|[1-9]\d|1\d{2}|2[0-9]{2}|3[0-5]\d|36[0-5])$"
                value={perYearValue}
                onChange={(e) => setPerYearValue(sanitizeNumericInput(e))} />
            <p>working day per year.</p>
            <p>put new value if you want</p>
            <button onClick={saveShiftsInfo}>
                save
            </button>
        </StylePad>
    )
}