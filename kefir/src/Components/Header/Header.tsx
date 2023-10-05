import React from "react";
import header from './Header.module.css'
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {Checkbox} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Header (){
    return(
        <div className={header.header}>
          <p>267 комментраиев</p>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
    )
}