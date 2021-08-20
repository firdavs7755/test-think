import React from 'react';
import {commentsApi} from "../../services/comments";

function Comments() {
    const bringComments=()=>{
        commentsApi.getComments()
            .then(res=>{
                console.log('res',res)
            })
    }
    return(
        <>
            Comments
        </>
    )
}

export default Comments;
