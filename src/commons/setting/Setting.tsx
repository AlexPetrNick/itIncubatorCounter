import React, {ChangeEvent, MouseEvent, Dispatch, FC, SetStateAction, useState} from "react";
import {Button} from "../elements/Button";
import {stateType} from "../../App";

export type settingType = {
    state: stateType
    correctValue: boolean
    setMaxMinValue: (attr:string, value: number) => void
    setLocalStorage: () => void
}

export const Setting: FC<settingType> = ({state, correctValue, setMaxMinValue,
                                             setLocalStorage}) => {

    const onChangeInputNumber = (e: ChangeEvent<HTMLInputElement>, attr: string) => {
        const valueInput = Number(e.currentTarget.value)
        setMaxMinValue(attr, valueInput)
    }
    const onClickApply = (e: MouseEvent<HTMLButtonElement>) => setLocalStorage()

    return (
        <div className={"wrapper__setting"}>
            <div className={state.upValue >= 0 ? "count__max__min" : "count__max__min__red"}>
                <i>Верхний порог</i>
                <input
                    className={"input_number"}
                    type="number"
                    value={state.upValue}
                    onChange={(e) => onChangeInputNumber(e, "upValue")}
                />
            </div>
            <div className={state.downValue >= 0 ? "count__max__min" : "count__max__min__red"}>
                <i>Нижний порог</i>
                <input
                    className={"input_number"}
                    type="number"
                    onChange={(e) => onChangeInputNumber(e, "downValue")}
                    value={state.downValue}
                />
            </div>
            <Button
                name={"Apply"}
                disabled={!correctValue}
                onClickButton={onClickApply}
            />
        </div>
    )
}