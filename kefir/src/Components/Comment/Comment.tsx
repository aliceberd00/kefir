import React from "react";
import comment from './Comment.module.css';
import {Avatar, Checkbox} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Comment () {
    return (
        <div className={comment.comment_container}>
          <div className={comment.avatar}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>

          <div className={comment.head}>
            <div className={comment.info}>
             <h5>User Name</h5>
             <p>вчера в 20:07</p>
            </div>

            <div className={comment.like}>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
          </div>

            <div className={comment.comment}>
            <p>Эксперимент в подготовки позволяет количественный условий особенности показывает, способствует соответствующий проверки проверки финансовых обучения позволяет и играет активности нашей практика развит</p>
            </div>
        </div>
    )
}

export default Comment