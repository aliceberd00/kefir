import React from "react";
import button from './Button.module.css'
export function Button () {
    return (
        <div>
            <button className={button.button}> Загрузить еще </button>
        </div>
    )
}