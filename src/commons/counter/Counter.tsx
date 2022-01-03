import React, {FC, useState,MouseEvent} from "react";
import {Display} from "./display/Display";
import {Button} from "../elements/Button";
import {stateType} from "../../App";

type CounterType = {
    state:stateType
    setCurrentValueInc: (e: MouseEvent<HTMLButtonElement>) => void
    resetCurrentValue: (e: MouseEvent<HTMLButtonElement>) => void
    correctValue: boolean
}

export const Counter:FC<CounterType> = ({state, resetCurrentValue, setCurrentValueInc, correctValue}) =>{

    return (
        <div className={"wrapper__counter"}>
            <Display
                state={state}
                correctValue={correctValue}
            />
            <div className={"wrapper__buttons"}>
                <Button
                    disabled={state.currentValue >= state.upValue}
                    name={"Inc"}
                    onClickButton={setCurrentValueInc}
                />
                <Button
                    disabled={state.currentValue <= state.downValue}
                    name={"Reset"}
                    onClickButton={resetCurrentValue}
                />
            </div>
        </div>
    )
}