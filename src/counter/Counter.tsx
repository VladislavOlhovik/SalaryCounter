import React from "react";
import { Header, ListOfWorkers, MainButtons, TotalAmount, WorkerInfo, StylePad } from "../components";
import './counter.css'

export const Counter = () => {
    return (
        <div className="counterWrapper">
            <Header />
            <StylePad>
                <TotalAmount />
            </StylePad>
            <StylePad>
                <WorkerInfo />
            </StylePad>
            <StylePad style="listOfworkersWrapper">
                <ListOfWorkers />
            </StylePad>
            <MainButtons />
        </div>
    )
}