import React, {FC} from "react";
import {stateType} from "../../../App";

type DisplayType = {
    state:stateType
    correctValue: boolean
}
const errorString = `Введите корректное значения в настройках`

export const Display:FC<DisplayType> = ({state, correctValue}) =>{
    console.log(state)
    let colorDisplay = `color__true`
    if (state.currentValue === state.upValue) colorDisplay += ` color__false`
    const valueDisplay = correctValue ?
        <i className={colorDisplay}>{state.currentValue}</i> :
        <i id={'text'}>{errorString}</i>
    return (
        <div className={"display"}>{valueDisplay}</div>
    )
}