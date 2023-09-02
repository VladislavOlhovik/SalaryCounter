import React from "react"
import './header.css';
import { changeIsActiveInfoWindowAC } from "../../reduxStore/appReducer";
import { useDispatch } from "react-redux";

export const Header = () => {

    const dispatch = useDispatch()

    const onChangeIsActiveInfoWindow = () => {
        dispatch(changeIsActiveInfoWindowAC(true))
    }
    
    return (
        <div className="headerWrapper">
            <h1>
                Salary Counter
            </h1>
            <h1 onClick={onChangeIsActiveInfoWindow}>
                i
            </h1>
        </div>
    )
}