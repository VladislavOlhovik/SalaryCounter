import React from "react";
import { useSelector } from 'react-redux'
import { RootStateType } from "../../reduxStore/store";
import { WorkersType } from "../../reduxStore/appReducer";
import './listOfworkers.css'


export const ListOfWorkers = () => {

    const workersList = useSelector<RootStateType, Array<WorkersType>>((state) => state.app.workers)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>shifts</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                {workersList.map(e => {
                    return (
                        <tr key={Date.now().toString() + Math.random().toString(36).substr(2, 9)}>
                            <th>{e.workerName}</th>
                            <th>{e.shifts}</th>
                            <th>{e.salary}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
