// to-do: sort import properly
import React from "react";
import './filterButtonsBlock.css'
import { useDispatch, useSelector } from "react-redux";
import { FilterType, StateType, setFilterTypeAC } from "../../reduxStore/appReducer";
import { RootStateType } from "../../reduxStore/store";

export const FilterButtonsBlock = () => {

    const { filterType } = useSelector<RootStateType, StateType>(state => state.app);
    const dispatch = useDispatch();
    const setFilter = (filterValue: FilterType) => {
        dispatch(setFilterTypeAC(filterValue))
    }
    return (
        <div className="filterButtonsBlockWrapper">
            {/*to-do: map this to array*/}
            <div className={`${filterType === "DEFAULT" && "active"}`}
                onClick={() => setFilter('DEFAULT')}>
                <p>Default</p>
            </div>
            <div className={`${filterType === "PER_SHIFT" && "active"}`}
                onClick={() => setFilter('PER_SHIFT')}>
                <p>Per shift</p>
            </div>
            <div className={`${filterType === "PER_WEEK" && "active"}`}
                onClick={() => setFilter('PER_WEEK')}>
                <p>Per week</p>
            </div>
            <div className={`${filterType === "PER_MONTH" && "active"}`}
                onClick={() => setFilter('PER_MONTH')}>
                <p>Per month</p>
            </div>
            <div className={`${filterType === "PER_YEAR" && "active"}`}
                onClick={() => setFilter('PER_YEAR')}>
                <p>Per year</p>
            </div>
        </div>
    )
}
