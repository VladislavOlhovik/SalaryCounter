import React from "react";
import { useSelector } from 'react-redux'
import { RootStateType } from "../../reduxStore/store";
import { StateType, WorkersType } from "../../reduxStore/appReducer";
import './salaryInformationTableBlock.css'
import { StylePad } from "../StylePad/StylePad";


export const SalaryInformationTableBlock = () => {

    const { workers, filterType, shiftInfo } = useSelector<RootStateType, StateType>((state) => state.app)

    const getInfo = (worker: WorkersType) => {
        switch (filterType) {
            case "DEFAULT":
                return { salary: worker.salaryDefault, shifts: worker.shifts }
            case "PER_SHIFT":
                return { salary: worker.salaryPerShift, shifts: shiftInfo.PER_SHIFT }
            case "PER_WEEK":
                return { salary: worker.salaryPerWeek, shifts: shiftInfo.PER_WEEK }
            case "PER_MONTH":
                return { salary: worker.salaryPerMonth, shifts: shiftInfo.PER_MONTH }
            case "PER_YEAR":
                return { salary: worker.salaryPerYear, shifts: shiftInfo.PER_YEAR }
        }
    }

    return (
        <StylePad styleProp={"salaryInformationTableBlockWrapper"}>
            <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>shifts</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map(e => {
                        return (
                            <tr key={Date.now().toString() + Math.random().toString(36).substr(2, 9)}>
                                <th>{e.workerName}</th>
                                <th>{getInfo(e).shifts}</th>
                                <th>{getInfo(e).salary}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </StylePad>
    )
}
