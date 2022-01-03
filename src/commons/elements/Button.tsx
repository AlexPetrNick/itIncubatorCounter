import React, {FC, MouseEvent} from "react";

type ButtonType = {
    name:string
    disabled: boolean
    onClickButton: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button:FC<ButtonType> = ({name,disabled, onClickButton}) =>{
    return (
        <button
            onClick={onClickButton}
            className={"btn_univ"}
            disabled={disabled}
        >{name}</button>
    )
}