import React from "react";
import column from './Colomn.module.css';
import Comment from "../Comment/Comment";


export default function Colomn() {

    return (
        <div>
         <div className={column.comment}>
           <Comment/>
         </div>

         <div className={column.comment}>
           <Comment/>
         </div>

         <div className={column.comment}>
           <Comment/>
         </div>
        </div>
    );
}
