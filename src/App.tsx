import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Setting} from "./commons/setting/Setting";
import {Counter} from "./commons/counter/Counter";

export type stateType = {
    upValue: number
    downValue: number
    currentValue: number
}

const localStore = 'data'
const state:stateType = {
    upValue: 5,
    downValue: 0,
    currentValue: 0
}
let stateLocalStorage:string | null = localStorage.getItem(localStore)
const initValue:stateType = stateLocalStorage ? JSON.parse(stateLocalStorage) : state

export const App = () => {
    const [correctValue, setCorrectValue] = useState<boolean>(true)
    const [state, setState] = useState<stateType>(initValue)

    const setMaxMinValue = (attr:string, value: number) => {
        const stateCopy = {...state}
        if (attr === "upValue") {
            stateCopy.upValue = value
        } else {
            stateCopy.downValue = value
        }
        if (stateCopy.upValue < 0 || stateCopy.downValue < 0) {
            setCorrectValue(false)
        } else {
            setCorrectValue(true)
        }
        setState(stateCopy)
    }
    const setLocalStorage = () => {
        localStorage.setItem(localStore,JSON.stringify(state))
    }
    const setCurrentValueInc = (e: MouseEvent<HTMLButtonElement>) => {
        let copyState = {...state}
        copyState.currentValue = state.currentValue + 1
        setState(copyState)
    }
    const resetCurrentValue = (e: MouseEvent<HTMLButtonElement>) => {
        let copyState = {...state}
        copyState.currentValue = state.downValue
        setState(copyState)
    }

    return (
        <div className="App">
            <Setting
                setLocalStorage={setLocalStorage}
                setMaxMinValue={setMaxMinValue}
                state={state}
                correctValue={correctValue}
            />
            <Counter
                state={state}
                correctValue={correctValue}
                setCurrentValueInc={setCurrentValueInc}
                resetCurrentValue={resetCurrentValue}
            />
        </div>
    );
}

