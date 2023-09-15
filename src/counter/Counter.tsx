import React from "react";
import { FilterButtonsBlock, Header, InfoWindow, SalaryInformationTableBlock, MainButtonsBlock, TotalAmountInputBlock, WorkerInfoInputsBlock } from "../components";
import './counter.css'
import { useSelector } from "react-redux";
import { RootStateType } from "../reduxStore/store";
import { StateType } from "../reduxStore/appReducer";

// to-do: pages/home
export const Counter = () => {

    const { isActiveInfoWindow } = useSelector<RootStateType, StateType>((state) => state.app)

    return (
        <div className="counterWrapper">
            <Header />
            {isActiveInfoWindow && <InfoWindow />}
            <TotalAmountInputBlock />
            <WorkerInfoInputsBlock />
            <FilterButtonsBlock />
            <SalaryInformationTableBlock />
            <MainButtonsBlock />
        </div>
    )
}
